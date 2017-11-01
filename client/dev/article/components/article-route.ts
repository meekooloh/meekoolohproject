import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	ArticleCmp
} from "../components/article-cmp";

const articleRoutes:Routes = [
	{
		path: "articles",
		component: ArticleCmp,
		pathMatch: "full"
	}
]

export const articleRouting = RouterModule.forRoot(articleRoutes);
