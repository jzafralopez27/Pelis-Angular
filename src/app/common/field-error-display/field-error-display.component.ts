import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrl: './field-error-display.component.css'
})
export class FieldErrorDisplayComponent {
@Input() fieldNgModel: AbstractControlDirective | AbstractControl | null;

constructor(){
  this.fieldNgModel = null
}
}
