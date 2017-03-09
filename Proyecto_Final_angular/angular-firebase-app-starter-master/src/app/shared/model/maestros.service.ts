import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2";
import {Maestro} from "./Maestro";
import {Detalle} from "./detalle";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";
@Injectable()
export class MaestrosService {

    //-------Funcion que hace un listado de los maestros---///
    constructor(private db: AngularFireDatabase) { }

    findAllMestros(): Observable<Maestro[]> {
        return this.db.list('maestro');
    }//Fin Funcion


    //----------------------Devuelve el detalle que tenga la misma URL que el maestro-------------------------------------//
    findAllDetallesForMaestro(maestroUrl: string): Observable<Detalle[]> {

        return this.db.list('detalle', {
            query: {
                orderByChild: 'url',
                equalTo: maestroUrl
            }
        })

    }

}
