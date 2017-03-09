import { Component, OnInit } from '@angular/core';
import { DetallesService } from '../shared/model/detalles.service';
import {Observable} from "rxjs/Rx";
import {Detalle} from  '../shared/model/detalle';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-detalle-maestro',
  templateUrl: './detalle-maestro.component.html',
  styleUrls: ['./detalle-maestro.component.css']
})
export class DetalleMaestroComponent implements OnInit {

  detalles: Detalle[];
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private detalleService : DetallesService) {

    }

  ngOnInit() {
   const maestroUrl = this.route.snapshot.params['id'];


    this.detalleService.findAllDetallesForMaestro(maestroUrl)
        .do(console.log)
        .subscribe(
            detalles => this.detalles = detalles
        );
  }

}
