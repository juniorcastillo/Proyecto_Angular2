import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    maestro$: FirebaseListObservable<any>;//Inicializar
    detalle$: FirebaseObjectObservable<any>;//Inicializar
    firstMaestro: any;
    constructor(private af: AngularFire) {
        this.maestro$ = af.database.list('maestro');//Esto lo ultilizacion para que haga un listado de los maestros
        //this.maestro$.subscribe(console.log);//Mostramos el listado

        this.detalle$ = af.database.object('detalle/1');//Esto lo ultilizacion para que haga un listado de los detalles
        //this.detalle$.subscribe(console.log);//Mostramos el listado

        this.maestro$.map(maestro => maestro[1])
            .subscribe(
            maestro => this.firstMaestro = maestro//guardo en firstMaestro la posicion 1 del array maestro
            );

    }
    listPush() {

        this.maestro$.push({ description: 'TEST NEW MAESTRO' })
            .then(
            () => console.log('List Push Done'),
            console.error
            );

    }

    listRemove() {

        this.maestro$.remove(this.firstMaestro);
    }

    listUpdate() {
        this.maestro$.update(this.firstMaestro, { description: 'Modificado' })
    }

    objUpdate() {//actualizo el objecto sin borrar los demas
        this.detalle$.update({ descripcion: 'new description' })//Actualizo el objecto con el nombre descripcion

    }

    objSet() {//Actualizo el objeto y borro el resto de los datos que no especifico
         this.detalle$.update({ descripcion: 'new description' })//Actualizo el objecto con el nombre descripcion
    }


}
