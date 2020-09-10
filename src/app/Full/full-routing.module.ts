import { EditFanPageModule } from "./edit-fan/edit-fan.module";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "your-scorecard", pathMatch: "full" },
	{
		path: "forgot-password",
		loadChildren: () =>
			import("./forgot-password/forgot-password.module").then(
				(m) => m.ForgotPasswordPageModule
			),
	},
	{
		path: "your-profile",
		loadChildren: () =>
			import("./your-profile/your-profile.module").then(
				(m) => m.YourProfilePageModule
			),
	},
	{
		path: "your-scorecard",
		loadChildren: () =>
			import("./your-scorecard/your-scorecard.module").then(
				(m) => m.YourScorecardPageModule
			),
	},
	{
		path: "share-campaign",
		loadChildren: () =>
			import("../Full/share-campaign/share-campaign.module").then(
				(m) => m.ShareCampaignPageModule
			),
	},
	{
		path: "your-fans",
		loadChildren: () =>
			import("../Full/your-fans/your-fans.module").then(
				(m) => m.YourFansPageModule
			),
	},
	{
		path: "reward-progress",
		loadChildren: () =>
			import("../Full/reward-progress/reward-progress.module").then(
				(m) => m.RewardProgressPageModule
			),
	},
	{
		path: "faq",
		loadChildren: () =>
			import("../Full/faq/faq.module").then((m) => m.FaqPageModule),
	},
	{
		path: "add-fans",
		loadChildren: () =>
			import("./share-campaign/add-fans/add-fans.module").then(
				(m) => m.AddFansPageModule
			),
	},
	{
		path: "social-sharing",
		loadChildren: () =>
			import("./share-campaign/social-sharing/social-sharing.module").then(
				(m) => m.SocialSharingPageModule
			),
	},
	{
		path: "reset-password",
		loadChildren: () =>
			import("../Full/reset-password/reset-password.module").then(
				(m) => m.ResetPasswordPageModule
			),
	},
	{
		path: "edit-fan",
		loadChildren: () =>
			import("./edit-fan/edit-fan.module").then((m) => m.EditFanPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FullPageRoutingModule {}
