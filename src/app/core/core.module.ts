import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TOKEN_CONF, Conf } from "./Config";
//import { AuthService } from "./auth.service";

//MODULO CHE ESPONE SOLO SERVIZI DA METTERE IN "ROOT" COME SINGLETON GLOBALI (share con tutti i moduli)
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    //AuthService, //NON SERVE QUI PERCHE' HO MESSO providedIn: 'root' SUL Service
    {
      provide: TOKEN_CONF,
      useFactory: () => JSON.parse(sessionStorage.getItem("SECRET")) as Conf
    },
    {
      provide: "CONFIG",
      useFactory: http => http.get("http://getconfig"),
      deps: [HttpClient]
    },
    { provide: "USER", useValue: { name: "Etzel", surname: "" } },
    { provide: "SUEPRUSER-ALIAS", useExisting: "USER" }
  ]
})
export class CoreModule {}
