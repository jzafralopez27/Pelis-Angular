import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peli } from '@/model/peli.model';
import { PeliApiService } from '@/services/peli-api.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VariableBinding } from '@angular/compiler';
import { mapPeliToVm, mapVmToPeli } from './peli.mapper';
import { PeliVm } from './peli.vm';

@Component({
  selector: 'app-peli-edit',
  templateUrl: './peli-edit.component.html',
  styleUrl: './peli-edit.component.css'
})
export class PeliEditComponent {
  id: number;
  peliForm?: FormGroup

  constructor(private route: ActivatedRoute, private peliApi: PeliApiService, private formBuilder: FormBuilder) {
    this.id = +(this.route.snapshot.paramMap.get('id')??'');
    var pelis: Peli[];
    var peliVM: PeliVm = { 
      id: 0,
      name: '',
      imageUrl: '',
      year: 0 
    }
    
    peliApi.getAll().subscribe((pelisJSON) => {
      pelis = pelisJSON;
      var peliEncontrada = pelis.find((peli) => peli.id == this.id)!
      peliVM = mapPeliToVm(peliEncontrada)
      this.peliForm = this.formBuilder.group({
        name: [peliVM.name, Validators.required],
        imageUrl: [peliVM.imageUrl,[Validators.required, Validators.pattern('https?://.+')]],
        year: [peliVM.year,[Validators.required]]
      })
    });

   
  } // algo de aqui ta mal?


  handleSaveClick() {
    if (this.peliForm?.valid){
      console.log(this.peliForm.value);
      const peli = mapVmToPeli(this.peliForm.value);
      this.peliApi.Edit(peli).subscribe({
        next: (peli) => {
          alert('Peli insertada correctamente');
          console.log(peli)
        },
        error: (error) => {
          alert('Error al insertar la peli');
          console.log(error);
        },
      });
    } else {
      alert(
        'Formulario invalido'
      ); //salta a esto
  }
  }
}
