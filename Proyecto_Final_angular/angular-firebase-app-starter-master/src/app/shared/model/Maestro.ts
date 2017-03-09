
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
export class Maestro {

    constructor(
        public $key:string,
        public apellido: string,
        public asignatura: string,
        public dni: string,
        public nombre: string,
        public url:string) {

    }


    static fromJson({$key, apellido, asignatura, dni,nombre,url}) {
      return new Maestro($key, apellido, asignatura, dni, nombre,url);
  }

  static fromJsonArray(json : any[]) : Maestro[] {
      return json.map(Maestro.fromJson);
  }

}
