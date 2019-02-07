import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
// import { Facebook, FacebookOriginal } from "@ionic-native/facebook";
import { Usuario } from "../../models/usuario";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Storage } from "@ionic/storage";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import { HomePage } from "../home/home";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage implements OnInit {
  token: string = "";

  loginForm: FormGroup;
  loginError: string;
  usuario = new Usuario();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public storage: Storage,
    public facebook: Facebook,
    private formBuilder: FormBuilder,
    public agularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.validarCampos();
    // this.usuario.email = this.authService.user.email;
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(res => {
        firebase
          .auth()
          .getRedirectResult()
          .then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            var token = result.credential;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            console.log(token, user);
          })
          .catch(function(error) {
            // Handle Errors here.
            console.log(error.message);
          });
      });
  }

  ionViewDidLoad() {}

  validarCampos() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  login() {
    this.usuario.email = this.loginForm.controls["email"].value;
    this.usuario.password = this.loginForm.controls["password"].value;
    this.authService.entrar(this.usuario).subscribe(
      res => {
        if (res.token) {
          this.storage.set("token", res.token);
          this.storage.set("logado", true);
          this.navCtrl.setRoot(HomePage);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  logoutFacebook() {
    this.facebook.logout();
  }

  loginFacebook() {
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.facebook.login(permissions).then(
      (response: FacebookLoginResponse) => {
        console.log(response.status);
        let params = new Array<string>();

        this.facebook.api("/me?fields=name,email", params).then(
          res => {
            this.usuario.nome = res.name;
            this.usuario.email = res.email;

            this.authService.salvarUsuario(this.usuario).subscribe(res => {
              // this.logar(usuario);
              this.navCtrl.push(HomePage);
            });
          },
          error => {
            alert(error);
            console.log("ERRO LOGIN: ", error);
          }
        );
      },
      error => {
        alert(error);
        console.log(error);
      }
    );
  }

  // logar(usuario: Usuario) {
  //   this.salvarService.salvarFacebook(usuario).then(() => {
  //     console.log("Usuario cadastrado via facebook com sucesso!");
  //   });
  // }
}
