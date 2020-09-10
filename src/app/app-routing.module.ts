import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
	{
		path: "",
		redirectTo: "full/login",
		pathMatch: "full",
	},
	{
		path: "full/login",
		loadChildren: () =>
			import("./auth/login.module").then((m) => m.LoginPageModule),
	},
	{
		path: "script",
		loadChildren: () =>
			import("./Script/script.module").then((m) => m.ScriptPageModule),
	},
	{
		path: "full",
		loadChildren: () =>
			import("./Full/full.module").then((m) => m.FullPageModule),
		// canLoad: [AuthGuard]
	},
	{
		path: "contact-us/:originSection/:originURL",
		loadChildren: () =>
			import("./Global/contact-us/contact-us/contact-us.module").then(
				(m) => m.ContactUsPageModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
