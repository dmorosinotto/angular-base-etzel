import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SearchBoxComponent } from "./components/search-box/search-box.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SearchBoxComponent],
  exports: [FormsModule, SearchBoxComponent]
})
export class ToolboxModule {}
