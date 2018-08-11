import { Injectable } from "@angular/core";
import { AppModule } from "../../app.module";

@Injectable() //SERVIZIO REGISTRATO NEL COMPONENTE
export class PaginatorService {
  constructor() {
    this.totalPag = Math.round(Math.random() * 10);
  }

  public currPage: number = 0;
  public totalPag: number;

  next() {
    if (this.currPage < this.totalPag) this.currPage++;
  }

  prev() {
    if (this.currPage > 0) this.currPage--;
  }
}
