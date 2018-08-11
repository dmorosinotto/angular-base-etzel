import { Component, OnInit, Input } from "@angular/core";
import { PaginatorService } from "./paginator.service";

@Component({
  selector: "cmp-table-page",
  templateUrl: "./table-page.component.html",
  styles: [],
  providers: [PaginatorService]
})
export class TablePageComponent implements OnInit {
  constructor(public page: PaginatorService) {}

  @Input()
  public header: string;

  ngOnInit() {}

  handleClick(btn: string) {
    if (btn == ">") this.page.next();
    else this.page.prev();
  }
}
