import { Routes, RouterModule } from "@angular/router";
import { ArticleCmp } from "../components/article-cmp";
import { ArticlesCmp } from "../components/articles-cmp";

const articleRoutes:Routes = [
	{
		path: "articles",
		component: ArticlesCmp,
		pathMatch: "full"
	},{
		path: "articles/:id",
		component: ArticleCmp,
		pathMatch: "full"
		
	},
]

export const articleRouting = RouterModule.forRoot(articleRoutes);
