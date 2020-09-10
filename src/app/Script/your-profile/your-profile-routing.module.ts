import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { YourProfilePage } from "./your-profile.page";

const routes: Routes = [
	{
		path: "",
		component: YourProfilePage,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		ReactiveFormsModule,
	],
	exports: [RouterModule],
})
export class YourProfilePageRoutingModule {}
