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

import { Category } from './../../../../server/api/category/model/category-model';

import "rxjs/add/operator/map";

@Injectable()
export class CategoryService {
  static ENDPOINT: string = "/api/category/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll(): Observable<any> {
    return this._http
               .get(CategoryService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(CategoryService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }

  add(category: Category): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .post(CategoryService.ENDPOINT.replace(/:id/, ""), category, {headers})
               .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
               .delete(CategoryService.ENDPOINT.replace(/:id/, id));
  }
}
