import { Injectable, Inject } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(@Inject("USER") private _usr: User) {}

  getUser(): User {
    return this._usr;
  }
}

export interface User {
  name: string;
  surname: string;
}
