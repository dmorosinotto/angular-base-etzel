import { Component, OnInit } from "@angular/core";
import { TablePageComponent } from "../table-page/table-page.component";
import { PaginatorService } from "../table-page/paginator.service";

@Component({
  selector: "cmp-table-header",
  templateUrl: "./table-header.component.html",
  styles: []
})
export class TableHeaderComponent implements OnInit {
  constructor(
    public parentTable: TablePageComponent,
    public page: PaginatorService
  ) {}

  ngOnInit() {}

  set10() {
    this.page.totalPag = 10;
  }
}
