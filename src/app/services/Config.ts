import { InjectionToken } from "@angular/core";

export interface Conf {
  baseurl: string;
  timeout: number;
}

export const TOKEN_CONF = new InjectionToken<Conf>("INJECTED-CONFIG-ON-WINDOW");
