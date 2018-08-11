import { Injectable, Inject } from "@angular/core";
import { TOKEN_CONF, Conf } from "../../core/Config";
//import { AnagraficheModule } from "../anagrafiche.module";

@Injectable({
  providedIn: "root"
  //providedIn: AnagraficheModule //ALTERNATIVA PER NON METTERLO NELLA DICHIARAZIONE providers DELL app.module.ts
})
export class AnagrModService {
  constructor(@Inject(TOKEN_CONF) public conf: Conf) {}
}
