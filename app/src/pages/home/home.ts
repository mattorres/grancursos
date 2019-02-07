import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NoticiasPage } from "../noticias/noticias";
import { EventosPage } from "../eventos/eventos";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  noticiasPage() {
    this.navCtrl.push(NoticiasPage);
  }

  eventoPage() {
    this.navCtrl.push(EventosPage);
  }
}
