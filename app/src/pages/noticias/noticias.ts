import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { NoticiaServiceProvider } from "../../providers/noticia-service/noticia-service";
import { Noticia } from "../../models/noticia";
import { LoginPage } from "../login/login";

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-noticias",
  templateUrl: "noticias.html"
})
export class NoticiasPage implements OnInit {
  noticias: Noticia[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public noticiaService: NoticiaServiceProvider,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.listarNoticias();
  }

  loginPage() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {}

  listarNoticias() {
    let loading = this.loadingController.create({
      content: "Aguarde..."
    });
    loading.present();
    this.noticiaService.listarNoticias().subscribe(
      res => {
        this.noticias = res.eventos;
        loading.dismiss();
      },
      error => {
        loading.dismiss();
        if (error.status == 401) {
          loading.dismiss();
        }
      }
    );
  }
}
