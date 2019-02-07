import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EventoServiceProvider } from "../../providers/evento-service/evento-service";

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-eventos",
  templateUrl: "eventos.html"
})
export class EventosPage implements OnInit {
  eventos: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventoService: EventoServiceProvider
  ) {}

  ngOnInit() {
    this.listarEventos();
  }

  listarEventos() {
    this.eventoService.listarEventos().subscribe(
      res => {
        this.eventos = res.eventos;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventosPage");
  }
}
