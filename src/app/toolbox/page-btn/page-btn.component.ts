import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cmp-page-btn",
  templateUrl: "./page-btn.component.html",
  styles: ["button {background-color: #FF0000 }"]
})
export class PageBtnComponent implements OnInit {
  constructor() {}

  @Input()
  txt: string;
  @Output()
  onPress = new EventEmitter<string>();

  ngOnInit() {}

  doSomething() {
    this.onPress.emit(this.txt);
  }
}
