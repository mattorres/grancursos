import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_REST } from "../../app/config";

/*
  Generated class for the NoticiaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaServiceProvider {
  constructor(public http: HttpClient) {
    console.log("Hello NoticiaServiceProvider Provider");
  }
  listarNoticias(): Observable<any> {
    return this.http.get(URL_REST + "noticia/noticia");
  }
}
