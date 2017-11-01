import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { TodoCmp }   from "./todo/components/todo-cmp";
import { MetadataCmp }   from "./metadata/components/metadata-cmp";
import { ArticleCmp }   from "./article/components/article-cmp";
import { CategoryCmp }   from "./category/components/category-cmp";
import { todoRouting } from "./todo/components/todo-route";
import { articleRouting } from "./article/components/article-route";
import { TodoService }   from "./todo/services/todo-service";
import { ArticleService }   from "./article/services/article-service";
import { CategoryService }   from "./category/services/category-service";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      todoRouting,
      articleRouting
    ],
    declarations: [
      App,
      TodoCmp,
      ArticleCmp,
      MetadataCmp,
      CategoryCmp
    ],
    providers: [
      TodoService,
      ArticleService,
      CategoryService
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
