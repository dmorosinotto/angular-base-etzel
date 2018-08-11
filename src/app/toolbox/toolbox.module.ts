import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { TablePageComponent } from "./table-page/table-page.component";
import { TableHeaderComponent } from "./table-header/table-header.component";
import { PageBtnComponent } from "./page-btn/page-btn.component";
//import { PaginatorService } from "./table-page/paginator.service";

//QUESTO MODULO ESPONE TUTTI I COMPONENTI DI UI RIUTILIZZABILI (custom miei + import/export di quelli generici ES: FormsModule + MaterialXXX)
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    SearchBoxComponent,
    TablePageComponent,
    TableHeaderComponent,
    PageBtnComponent
  ],
  exports: [
    FormsModule,
    SearchBoxComponent,
    TablePageComponent,
    TableHeaderComponent
  ]
  //,providers: [PaginatorService] //NON VA MESSO QUI PERCHE' IL SERVIZIO LO USO SOLO NEL TABLE COMP E LO METTO A QUEL LIVELLO DI Providers
})
export class ToolboxModule {}
