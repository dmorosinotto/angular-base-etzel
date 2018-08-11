import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShowSecretComponent } from "./show-secret/show-secret.component";
//import { AnagrModService } from './services/anag.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowSecretComponent],
  exports: [ShowSecretComponent]
  //providers: [AnagrModService]  //ABBIAMO MESSO NEL providedIn DEL SERVICE
  //<-- SHORT DI {provide: AnagrModService, useClass: AnagrModService  } //USA TIPO COME TOKEN E POI ISTANZA DI CLASSE
})
export class AnagraficheModule {}
