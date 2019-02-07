import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EventosPage } from "./eventos";
import { EventoServiceProvider } from "../../providers/evento-service/evento-service";

@NgModule({
  declarations: [EventosPage],
  imports: [IonicPageModule.forChild(EventosPage)],
  providers: [EventoServiceProvider]
})
export class EventosPageModule {}
