import { Component, OnInit } from '@angular/core';
import { DetallesService } from '../shared/model/detalles.service';
import {Observable} from "rxjs/Rx";
import {Detalle} from  '../shared/model/detalle';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  detalles$: Observable<Detalle[]>;
  constructor(private detallesService : DetallesService) { }

  ngOnInit() {

   this.detalles$=this.detallesService.findAllDetalles();

  }

}
