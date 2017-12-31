import { Routes, RouterModule } from "@angular/router";
import { CategoryCmp } from "../components/category-cmp";

const categoryRoutes:Routes = [
	{
		path: "categories",
		component: CategoryCmp,
		pathMatch: "full"
	}
]

export const categoryRouting = RouterModule.forRoot(categoryRoutes);
