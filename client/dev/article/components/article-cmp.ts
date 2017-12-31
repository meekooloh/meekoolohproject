import { Component, OnInit, OnDestroy } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import { ArticleService } from "../services/article-service";
import { CategoryService } from "../../category/services/category-service";

import { Article } from './../../../../server/api/article/model/article-model'
import { Category } from './../../../../server/api/category/model/category-model'

@Component({
  selector: "article-cmp",
  templateUrl: "article/templates/article.html",
  styleUrls: ["article/styles/article.css", "app.css"]
})
export class ArticleCmp implements OnInit, OnDestroy {
  
  private sub: any;
  title: string;
  article: Article;
  categories: Category[] = [];
  articleForm: Article;
  id: string;

  constructor(
      private _articleService: ArticleService,
      private _categoryService: CategoryService,
      private route: ActivatedRoute,
      private router: Router) {
  
    this.cleanForm();
  }

  ngOnInit() {
    this.cleanForm();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id == "new") {
        this.title = "Add article";

      } else {
        this.title = "Edit article";
      }
    });

    this._getAll();
  }
  validateData(article: Article): boolean {
    if (article) {
      if (/([^\s])/.test(article.title) &&
        /([^\s])/.test(article.info) &&
        !!article.category
      ) {
        return true;       
      }
    }
    return false;
  }

  private _getAll(): void {
    if (this.id != "new") {
      this._articleService
        .getById(this.id)
        .subscribe((article) => {
          this.article = article;
          this.articleForm = article;
        });
    }
    this._categoryService
      .getAll()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  add(article: Article): void {
    this._articleService
        .add(article)
        .subscribe((m) => {
          this.article = m;
          this.cleanForm();
          this.router.navigate(["/articles"]);
        });
  }

  update(article: Article): void {
    article._id = undefined;
    this._articleService
        .update(this.id, article)
        .subscribe((m) => {
          this.article = m;
          this.cleanForm();
          this.router.navigate(["/articles"]);
        });
  }

  remove(): void {
    this._articleService
      .remove(this.id)
      .subscribe(() => {
        this.router.navigate(["/articles"]);
      });
  }

  cleanForm() {
    this.articleForm = {
      "title": "",
      "info": "",
      "metadata": [],
      "user": null,
      "category": null,
      "subCategory": [],
      "createdAt": new Date() 
    };
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
