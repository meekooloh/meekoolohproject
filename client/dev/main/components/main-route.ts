import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	MainCmp
} from "../components/main-cmp";

const mainRoutes:Routes = [
	{
		path: "",
		component: MainCmp,
		pathMatch: "full"
	}
]

export const mainRouting = RouterModule.forRoot(mainRoutes);
