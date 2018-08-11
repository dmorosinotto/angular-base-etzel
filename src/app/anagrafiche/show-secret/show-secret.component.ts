import { Component, OnInit } from "@angular/core";
import { AnagrModService } from "../services/anag.service";
import { Conf } from "../../core/Config";

@Component({
  selector: "cmp-show-secret",
  templateUrl: "./show-secret.component.html",
  styles: []
})
export class ShowSecretComponent implements OnInit {
  constructor(anagrSvc: AnagrModService) {
    this.xxx = anagrSvc.conf;
  }
  public xxx: Conf;
  ngOnInit() {}
}
