import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
        descrip: ['', Validators.required],
        horas: ['',Validators.required],
        id_maestro: ['',Validators.required],
        url: ['',Validators.required]
    });

  }

  isErrorVisible(field:string, error:string){

      return this.form.controls[field].dirty
            && this.form.controls[field].errors &&
              this.form.controls[field].errors[error];
  }


  reset(){
      this.form.reset();
  }

  get valid() {
      return this.form.valid;
  }

  get value() {
      return this.form.value;
  }
}
