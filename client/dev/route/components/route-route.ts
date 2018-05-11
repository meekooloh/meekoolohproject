import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	RouteCmp
} from "../components/route-cmp";

const routeRoutes:Routes = [
	{
		path: "routes",
		component: RouteCmp,
		pathMatch: "full"
	}
]

export const routeRouting = RouterModule.forRoot(routeRoutes);