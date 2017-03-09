import { Component, OnInit,Input } from '@angular/core';
import { MaestrosService } from '../shared/model/maestros.service';
import { Maestro } from  '../shared/model/maestro';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allmaestros: Maestro[];
  filtro: Maestro[];
  constructor(private maestrosService:  MaestrosService) { }

  ngOnInit() {
   this.maestrosService.findAllMestros()//ESTO ES UNA FUNCION QUE RETURN UNA LISTA CON MAESTROS
    .do(console.log)
    //hacemos el filtrado
      .subscribe(
       maestros => this.allmaestros = this.filtro = maestros
    );
  }
  // ESTA funcion se activa cada vez que escriben en el buscador 
   search(search:string){

       this.filtro= this.allmaestros.filter(maestro => maestro.asignatura.includes(search));

   }
}
