import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliEditComponent } from './peli-edit.component';

describe('PeliEditComponent', () => {
  let component: PeliEditComponent;
  let fixture: ComponentFixture<PeliEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
