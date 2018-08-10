import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cmp-search-box",
  templateUrl: "./search-box.component.html",
  styles: []
})
export class SearchBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output()
  doSearch = new EventEmitter<string>();
}
