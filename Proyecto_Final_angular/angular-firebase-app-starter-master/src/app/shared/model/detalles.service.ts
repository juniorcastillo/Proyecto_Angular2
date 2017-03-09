import {Injectable, Inject} from '@angular/core';
import {AngularFire, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs";
import {Detalle} from "./detalle";
import {AngularFireDatabase} from "angularfire2";
@Injectable()
export class DetallesService {

  sdkDb:any;
constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) {
  this.sdkDb= fb.database().ref();
}


    findAllDetalles(): Observable<Detalle[]> {
        return this.db.list('detalle');
    }


    findAllDetallesForMaestro(maestroUrl: string): Observable<Detalle[]> {

        return this.db.list('detalle', {
            query: {
                orderByChild: 'url',
                equalTo: maestroUrl
            }
        })

    }
    //-------------------------------------------------------------//
    createNewDetalle(lesson: any): Observable<any> {
        const lessonsToSave = Object.assign({}, lesson);

        const newLessonKey = this.sdkDb.child('detalle').push().key;

        let dataToSave = {};

        dataToSave["detalle/" + newLessonKey] = lessonsToSave;

        return this.firebaseUpdate(dataToSave);
    }

    //-------------------------------------------------------------//
    firebaseUpdate(dataToSave) {


        const subject = new Subject();

        this.sdkDb.update(dataToSave)
            .then(
            val => {
                subject.next(val);
                subject.complete();

            },
            err => {
                subject.next(err);
                subject.complete();

            }
            );
        return subject.asObservable();
    }
}
