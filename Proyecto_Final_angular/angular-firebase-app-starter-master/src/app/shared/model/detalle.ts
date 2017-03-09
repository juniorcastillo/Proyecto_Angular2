import {Maestro} from "./Maestro";
import {Observable} from "rxjs/Rx";




export class Detalle {

    constructor(
        public $key:string,
        public descripcion:string,
        public horas: string,
        public id_maestro:string,
        public url:string) {

    }

    static fromJson({$key, descripcion, horas, id_maestro,url}) {
        return new Detalle($key,descripcion, horas, id_maestro, url);
    }

    static fromJsonArray(json : any[]) : Detalle[] {
        return json.map(Detalle.fromJson);
    }


}
