import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../../models/usuario";
import { URL_REST } from "../../app/config";
import { Observable } from "rxjs/Observable";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import AuthProvider = firebase.auth.AuthProvider;
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap } from "rxjs/operators";
import { Storage } from "@ionic/storage";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  public user: firebase.User;
  constructor(
    public http: HttpClient,
    public agularFireAuth: AngularFireAuth,
    private storage: Storage
  ) {}

  entrar(usuario: Usuario): Observable<any> {
    return this.http.post(URL_REST + "auth/login", usuario).pipe(
      tap(res => {
        this.storage.set("token", res["token"]);
      })
    );
  }

  salvarUsuario(usuario: Usuario) {
    return this.http.post(URL_REST + "auth/salvar", usuario);
  }

  loga(login: any) {
    this.agularFireAuth.auth.signInWithRedirect(login);
  }

  loginGoogle(google: any) {
    return new firebase.auth.GoogleAuthProvider();
  }

  signInWithEmail(credentials) {
    return this.agularFireAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }
}
