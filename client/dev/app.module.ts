import { NgModule, Component } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { ListItemCmp }   from "./components/list-item/list-item-cmp";
import { ListItemDeleteCmp }   from "./components/list-item-delete/list-item-delete-cmp";
import { TodoCmp }   from "./todo/components/todo-cmp";
import { MainCmp }   from "./main/components/main-cmp";
import { MetadataCmp }   from "./metadata/components/metadata-cmp";
import { ArticleCmp }   from "./article/components/article-cmp";
import { ArticlesCmp }   from "./article/components/articles-cmp";
import { CategoryCmp }   from "./category/components/category-cmp";
import { mainRouting } from "./main/components/main-route";
import { todoRouting } from "./todo/components/todo-route";
import { categoryRouting } from "./category/components/category-route";
import { articleRouting } from "./article/components/article-route";
import { MainService }   from "./main/services/main-service";
import { TodoService }   from "./todo/services/todo-service";
import { CategoryService }   from "./category/services/category-service";
import { ArticleService }   from "./article/services/article-service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { componentRouting } from "./component/components/component-route";
import { ComponentCmp } from "./component/components/component-cmp";
import { ComponentService } from "./component/services/component-service";
import { routeRouting } from "./route/components/route-route";
import { RouteCmp } from "./route/components/route-cmp";
import { RouteService } from "./route/services/route-service";
import { pageRouting } from "./page/components/page-route";
import { PagesCmp } from "./page/components/pages-cmp";
import { PageCmp } from "./page/components/page-cmp";
import { PageService } from "./page/services/page-service";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      mainRouting,
      todoRouting,
      categoryRouting,
      articleRouting,
      componentRouting,
      routeRouting,
      pageRouting,
      NgbModule.forRoot(),
    ],
    declarations: [
      App,
      ListItemCmp,
      ListItemDeleteCmp,
      TodoCmp,
      MainCmp,
      ArticlesCmp,
      ArticleCmp,
      MetadataCmp,
      CategoryCmp,
      ComponentCmp,
      RouteCmp,
      PagesCmp,
      PageCmp
    ],
    providers: [
      TodoService,
      MainService,
      ArticleService,
      CategoryService,
      ComponentService,
      RouteService,
      PageService
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
