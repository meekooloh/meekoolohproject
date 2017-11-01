import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { ArticleService } from "../services/article-service";

import { Article } from './../../../../server/api/article/model/article-model'

@Component({
  selector: "article-cmp",
  templateUrl: "article/templates/article.html",
  styleUrls: ["article/styles/article.css"]
})
export class ArticleCmp implements OnInit {
  title: string = "Add articles";
  articles: Article[] = [];
  articleForm: Article;

  constructor(private _articleService: ArticleService) {
    this.cleanForm();
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

  add(article: Article): void {
    this._articleService
        .add(article)
        .subscribe((m) => {
          this.articles.push(m);
          this.cleanForm();
        });
  }

  remove(id: string): void {
    this._articleService
      .remove(id)
      .subscribe(() => {
        this.articles.forEach((t, i) => {
          if (t._id === id)
            return this.articles.splice(i, 1);
        });
      });
  }

  cleanForm() {
    this.articleForm = {
      "title": "",
      "info": "",
      "metadata": [""],
      "user": null,
      "category": null,
      "subCategory": [],
      "createdAt": new Date() 
    };
  }
}
