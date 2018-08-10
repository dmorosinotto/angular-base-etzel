import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ModuleCacheService } from "./services/cache.service";
import { TOKEN_CONF, Conf } from "./services/Config";
import { ShowSecretComponent } from "./components/show-secret/show-secret.component";
import { TablePageComponent } from "./components/table-page/table-page.component";
import { PaginatorService } from "./services/paginator.service";
import { TableHeaderComponent } from "./components/table-header/table-header.component";
import { PageBtnComponent } from "./components/page-btn/page-btn.component";
import { ToolboxModule } from "./toolbox/toolbox.module";

@NgModule({
  declarations: [
    AppComponent,
    ShowSecretComponent,
    TablePageComponent,
    TableHeaderComponent,
    PageBtnComponent
  ],
  imports: [BrowserModule, HttpClientModule, ToolboxModule],
  providers: [
    ModuleCacheService, //<-- SHORT DI {provide: ModuleCacheService, useClass: ModuleCacheService  } //USA TIPO COME TOKEN E POI ISTANZA DI CLASSE
    { provide: "USER", useValue: { name: "Etzel", surname: "" } },
    {
      provide: TOKEN_CONF,
      useFactory: () => JSON.parse(sessionStorage.getItem("SECRET")) as Conf
    },
    {
      provide: "CONFIG",
      useFactory: http => http.get("http://getconfig"),
      deps: [HttpClient]
    },
    { provide: "SUEPRUSER-ALIAS", useExisting: "USER" }
    //, PaginatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
