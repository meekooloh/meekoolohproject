import {
  Inject,
  Injectable
} from "@angular/core";

import {
  Observable
} from "rxjs/Observable";

import {
  Http,
  Headers
} from "@angular/http";

import { Component } from './../../../../server/api/component/model/component-model';

import "rxjs/add/operator/map";

@Injectable()
export class ComponentService {
  static ENDPOINT: string = "/api/components/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll(): Observable<any> {
    return this._http
               .get(ComponentService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(ComponentService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }

  add(component: Component): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .post(ComponentService.ENDPOINT.replace(/:id/, ""), component, {headers})
               .map((r) => r.json());
  }

  update(id: string, component: Component): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .put(ComponentService.ENDPOINT.replace(/:id/, id), component, {headers})
               .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
               .delete(ComponentService.ENDPOINT.replace(/:id/, id));
  }
}
