import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL_REST } from "../../app/config";

/*
  Generated class for the EventoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoServiceProvider {
  constructor(public http: HttpClient) {
    console.log("Hello EventoServiceProvider Provider");
  }

  listarEventos(): Observable<any> {
    return this.http.get(URL_REST + "api/evento");
  }
}
