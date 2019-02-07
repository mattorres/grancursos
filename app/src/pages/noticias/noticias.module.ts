import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NoticiasPage } from "./noticias";
import { NoticiaServiceProvider } from "../../providers/noticia-service/noticia-service";

@NgModule({
  declarations: [NoticiasPage],
  imports: [IonicPageModule.forChild(NoticiasPage)],
  providers: [NoticiaServiceProvider]
})
export class NoticiasPageModule {}
