import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

import { PageService } from "../services/page-service";

import { Page } from './../../../../server/api/page/model/page-model'

@Component({
  selector: "pages-cmp",
  templateUrl: "page/templates/pages.html",
  styleUrls: ["page/styles/page.css", "app.css"]
})
export class PagesCmp implements OnInit {
  title: string = "Pages";
  pages: Page[] = [];
  pageForm: Page;

  constructor(private _pageService: PageService,
    private router: Router) {
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll(): void {
    this._pageService
        .getAll()
        .subscribe((pages) => {
          this.pages = pages;
        });
  }
  addPage(): void {
    this.router.navigate(["/pages", "new"]);
  }

}
