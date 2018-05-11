import { Routes, RouterModule } from "@angular/router";
import { ComponentCmp } from "../components/component-cmp";

const componentRoutes:Routes = [
	{
		path: "components",
		component: ComponentCmp,
		pathMatch: "full"
		
	},
]

export const componentRouting = RouterModule.forRoot(componentRoutes);
