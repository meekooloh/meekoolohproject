import { Routes, RouterModule } from "@angular/router";
import { PageCmp } from "../components/page-cmp";
import { PagesCmp } from "../components/pages-cmp";

const pageRoutes:Routes = [
	{
		path: "pages",
		component: PagesCmp,
		pathMatch: "full"
	},{
		path: "pages/:id",
		component: PageCmp,
		pathMatch: "full"
	}
]

export const pageRouting = RouterModule.forRoot(pageRoutes);
