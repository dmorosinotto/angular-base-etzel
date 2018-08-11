import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { ToolboxModule } from "./toolbox/toolbox.module";
import { CoreModule } from "./core/core.module";
import { AnagraficheModule } from "./anagrafiche/anagrafiche.module";
//import { MylibModule } from "mylib";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    ToolboxModule,
    AnagraficheModule
    //MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
