import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

import { ArticleService } from "../services/article-service";

import { Article } from './../../../../server/api/article/model/article-model'

@Component({
  selector: "articles-cmp",
  templateUrl: "article/templates/articles.html",
  styleUrls: ["article/styles/article.css", "app.css"]
})
export class ArticlesCmp implements OnInit {
  title: string = "Articles";
  articles: Article[] = [];
  articleForm: Article;

  constructor(private _articleService: ArticleService,
    private router: Router) {
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll(): void {
    this._articleService
        .getAll()
        .subscribe((articles) => {
          this.articles = articles;
        });
  }
  addArticle(): void {
    this.router.navigate(["/articles", "new"]);
  }

}
