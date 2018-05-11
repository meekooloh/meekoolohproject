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

import { RouteModel } from './../../../../server/api/route/model/route-model';

import "rxjs/add/operator/map";

@Injectable()
export class RouteService {
  static ENDPOINT: string = "/api/routes/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll(): Observable<any> {
    return this._http
               .get(RouteService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(RouteService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }

  add(route: RouteModel): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .post(RouteService.ENDPOINT.replace(/:id/, ""), route, {headers})
               .map((r) => r.json());
  }

  update(id: string, route: RouteModel): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .put(RouteService.ENDPOINT.replace(/:id/, id), route, {headers})
               .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
               .delete(RouteService.ENDPOINT.replace(/:id/, id));
  }
}
