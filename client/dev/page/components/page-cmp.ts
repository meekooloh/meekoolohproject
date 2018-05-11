import { Component, OnInit, OnDestroy } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import { PageService } from "../services/page-service";
import { ComponentService } from "../../component/services/component-service";
import { RouteService } from "../../route/services/route-service";

import { Page } from './../../../../server/api/page/model/page-model'
import { Category } from './../../../../server/api/category/model/category-model'
import { ComponentModel } from "../../../../server/api/component/model/component-model";
import { RouteModel } from "../../../../server/api/route/model/route-model";

@Component({
  selector: "page-cmp",
  templateUrl: "page/templates/page.html",
  styleUrls: ["page/styles/page.css", "app.css"]
})
export class PageCmp implements OnInit, OnDestroy {
  
  private sub: any;
  title: string;
  page: Page;
  routes: RouteModel[] = [];
  pageForm: Page;
  id: string;
  components: ComponentModel[];

  constructor(
      private _pageService: PageService,
      private componentService: ComponentService,
      private _routesService: RouteService,
      private route: ActivatedRoute,
      private router: Router) {
  
    this.cleanForm();
  }

  ngOnInit() {
    this.cleanForm();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id == "new") {
        this.title = "Add page";

      } else {
        this.title = "Edit page";
      }
    });
    this.getComponents();
    this._getAll();
  }

  validateData(page: Page): boolean {
    if (page) {
      if (page.route && page.pageContent) {
        return true;       
      }
    }
    return false;
  }

  getComponents() {
    this.componentService.getAll().subscribe(res => {
      this.components = res;
    })
  }
  private _getAll(): void {
    if (this.id != "new") {
      this._pageService
        .getById(this.id)
        .subscribe((page) => {
          this.page = page;
          this.pageForm = page;
        });
    }
    this._routesService
      .getAll()
      .subscribe((routes) => {
        this.routes = routes;
      });
  }

  add(page: Page): void {
    this._pageService
        .add(page)
        .subscribe((m) => {
          this.page = m;
          this.cleanForm();
          this.router.navigate(["/pages"]);
        });
  }

  update(page: Page): void {
    page._id = undefined;
    this._pageService
        .update(this.id, page)
        .subscribe((m) => {
          this.page = m;
          this.cleanForm();
          this.router.navigate(["/pages"]);
        });
  }

  remove(): void {
    this._pageService
      .remove(this.id)
      .subscribe(() => {
        this.router.navigate(["/pages"]);
      });
  }

  cleanForm() {
    this.pageForm = {
      "pageContent": "",
      "route": null,
      "createdAt": new Date() 
    };
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
