import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPageModule } from "../pages/login/login.module";
import { EventosPageModule } from "../pages/eventos/eventos.module";
import { NoticiasPageModule } from "../pages/noticias/noticias.module";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { Facebook } from "@ionic-native/facebook";
import { NoticiaServiceProvider } from "../providers/noticia-service/noticia-service";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { firebaseConfig } from "./firebase.config";
import { FormsModule } from "@angular/forms";
import { InterceptorProvider } from "../providers/http-interceptor/http-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
import { EventoServiceProvider } from "../providers/evento-service/evento-service";

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get("token");
    },
    whitelistedDomains: ["localhost:5000"]
  };
}
@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    LoginPageModule,
    EventosPageModule,
    NoticiasPageModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    NoticiaServiceProvider,
    AngularFireAuth,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorProvider,
      multi: true
    },
    EventoServiceProvider
  ]
})
export class AppModule {}
