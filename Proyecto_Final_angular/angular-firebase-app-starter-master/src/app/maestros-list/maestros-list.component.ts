import { Component, OnInit,Input } from '@angular/core';
import { Maestro } from  '../shared/model/maestro';
@Component({
  selector: 'maestros-list',
  templateUrl: './maestros-list.component.html',
  styleUrls: ['./maestros-list.component.css']
})
export class MaestrosListComponent implements OnInit {

@Input()

maestros: Maestro[];
  constructor() { }

  ngOnInit() {
  }

}
