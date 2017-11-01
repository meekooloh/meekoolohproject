/// <reference path="../../../../typings/index.d.ts" />

import {
  TestBed,
  async
} from "@angular/core/testing";

import {
  Observable
} from "rxjs/Observable";

import {ArticleCmp} from "../../../../client/dev/article/components/article-cmp";
import {ArticleService} from "../../../../client/dev/article/services/article-service";
import { Article } from "../../../../server/api/article/model/article-model";

class MockArticleService extends ArticleService {
  getAll(): Observable<any> {
    return new Observable((o) => {
      o.next([]);
    });
  }

  add(message: Article): Observable<any> {
    return new Observable((o) => {
      o.next(message);
    });
  }

  remove(id: string): Observable<any> {
    return new Observable((o) => {
      o.next(id);
    });
  }
}

describe("article_component", () => {
  describe("creation", () => {
    it("should create the component correctly", async(() => {
      let fixture = TestBed.createComponent(ArticleCmp);	  
	  fixture.detectChanges();

	  let compiled = fixture.debugElement.nativeElement;

	  expect(compiled).toBeDefined();
    }));

    it("should inicialize the cmp correctly", async(() => {
      let fixture = TestBed.createComponent(ArticleCmp);      
	  let instance = fixture.debugElement.componentInstance;
	  
	  spyOn(instance, "_getAll").and.callFake(() => {});
	  fixture.detectChanges();
	  expect(instance._getAll).toHaveBeenCalled();
    }));

    it("should call add correctly", async(() => {
      let fixture = TestBed.createComponent(ArticleCmp);
	  fixture.detectChanges();

	  let instance = fixture.debugElement.componentInstance;

	  let _articleMsg = "yo";
	  instance.add(_articleMsg);
    }));

    it("should call remove correctly", async(() => {
      let fixture = TestBed.createComponent(ArticleCmp);
	  fixture.detectChanges();
	  
	  let instance = fixture.debugElement.componentInstance;
	  let _id = "abc123";

	  instance.remove(_id);
    }));
  });
});
