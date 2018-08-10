import { Injectable, Inject } from "@angular/core";
import { TOKEN_CONF, Conf } from "./Config";
//import { AppModule } from '../app.module';

@Injectable()
//{
//providedIn: AppModule //ALTERNATIVA PER NON METTERLO NELLA DICHIARAZIONE providers DELL app.module.ts
//})
export class ModuleCacheService {
  constructor(@Inject(TOKEN_CONF) public conf: Conf) {}
}
