import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetallesService} from "../shared/model/detalles.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './nuevo-detalle.component.html',
  styleUrls: ['./nuevo-detalle.component.css']
})
export class NuevoDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute, private detallesService: DetallesService) { }

    ngOnInit() {
    }

   save(form){
      this.detallesService.createNewDetalle(form.value)
          .subscribe(
              () => {
                alert("Se ha creado correctamente");
                form.reset();
              },
              err => alert(`error al crear el detalle ${err}`)
          );
    }
}
