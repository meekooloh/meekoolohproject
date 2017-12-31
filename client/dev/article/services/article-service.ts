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

import { Article } from './../../../../server/api/article/model/article-model';

import "rxjs/add/operator/map";

@Injectable()
export class ArticleService {
  static ENDPOINT: string = "/api/articles/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll(): Observable<any> {
    return this._http
               .get(ArticleService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(ArticleService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }

  add(article: Article): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .post(ArticleService.ENDPOINT.replace(/:id/, ""), article, {headers})
               .map((r) => r.json());
  }

  update(id: string, article: Article): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
               .put(ArticleService.ENDPOINT.replace(/:id/, id), article, {headers})
               .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
               .delete(ArticleService.ENDPOINT.replace(/:id/, id));
  }
}
