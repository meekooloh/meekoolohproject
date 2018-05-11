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

import { Page } from './../../../../server/api/page/model/page-model';

import "rxjs/add/operator/map";

@Injectable()
export class PageService {
  static ENDPOINT: string = "/api/pages/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll(): Observable<any> {
    return this._http
               .get(PageService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(PageService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }

  add(page: Page): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .post(PageService.ENDPOINT.replace(/:id/, ""), page, {headers})
               .map((r) => r.json());
  }

  update(id: string, page: Page): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .put(PageService.ENDPOINT.replace(/:id/, id), page, {headers})
               .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
               .delete(PageService.ENDPOINT.replace(/:id/, id));
  }
}
