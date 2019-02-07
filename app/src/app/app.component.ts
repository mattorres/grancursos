import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { NoticiasPage } from "../pages/noticias/noticias";
import * as firebase from "firebase/app";
import { Storage } from "@ionic/storage";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      storage.get("token").then(res => {
        if (res != null) {
          this.rootPage = HomePage;
        }

        if (res == null) {
          this.rootPage = NoticiasPage;
        }
      });

      // firebase.auth;
      // firebase
      //   .auth()
      //   .getRedirectResult()
      //   .then(function(result) {
      //     if (result.credential) {
      //       var token = result.credential;
      //       var user = result.user;
      //       console.log(token, user);
      //     }
      //   })
      //   .catch(function(error) {});
    });
  }
}
