import { Component, OnInit } from "@angular/core";
import { ModuleCacheService } from "../../services/cache.service";
import { Conf } from "../../services/Config";

@Component({
  selector: "cmp-show-secret",
  templateUrl: "./show-secret.component.html",
  styles: []
})
export class ShowSecretComponent implements OnInit {
  constructor(cache: ModuleCacheService) {
    this.xxx = cache.conf;
  }
  public xxx: Conf;
  ngOnInit() {}
}
