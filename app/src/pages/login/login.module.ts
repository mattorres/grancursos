import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoginPage } from "./login";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
// import { Facebook, FacebookOriginal } from "@ionic-native/facebook";


@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage)],
  providers: [AuthServiceProvider]
})
export class LoginPageModule {}
