import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "campaign-pin-number", pathMatch: "full" },
	{
		path: "campaign-pin-number",
		loadChildren: () =>
			import("./campaign-pin-number/campaign-pin-number.module").then(
				(m) => m.CampaignPINNumberPageModule
			),
	},
	{
		path: "confirm-campaign",
		loadChildren: () =>
			import("./confirm-campaign/confirm-campaign.module").then(
				(m) => m.ConfirmCampaignPageModule
			),
	},
	{
		path: "create-your-account",
		loadChildren: () =>
			import("./create-your-account/create-your-account.module").then(
				(m) => m.CreateYourAccountPageModule
			),
	},
	{
		path: "tutorial",
		loadChildren: () =>
			import("./tutorial/tutorial.module").then((m) => m.TutorialPageModule),
	},
	{
		path: "pick-your-reward",
		loadChildren: () =>
			import("./pick-your-reward/pick-your-reward.module").then(
				(m) => m.PickYourRewardPageModule
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
		path: "add-your-fans-one",
		loadChildren: () =>
			import("./add-your-fans-one/add-your-fans-one.module").then(
				(m) => m.AddYourFansOnePageModule
			),
	},
	{
		path: "add-your-fans-two",
		loadChildren: () =>
			import("./add-your-fans-two/add-your-fans-two.module").then(
				(m) => m.AddYourFansTwoPageModule
			),
	},
	{
		path: "add-your-fans-three",
		loadChildren: () =>
			import("./add-your-fans-three/add-your-fans-three.module").then(
				(m) => m.AddYourFansThreePageModule
			),
	},
	{
		path: "add-your-fans-four",
		loadChildren: () =>
			import("./add-your-fans-four/add-your-fans-four.module").then(
				(m) => m.AddYourFansFourPageModule
			),
	},
	{
		path: "add-your-fans-five",
		loadChildren: () =>
			import("./add-your-fans-five/add-your-fans-five.module").then(
				(m) => m.AddYourFansFivePageModule
			),
	},
	{
		path: "share-campaign",
		loadChildren: () =>
			import("./share-campaign/share-campaign.module").then(
				(m) => m.ShareCampaignPageModule
			),
	},
	{
		path: "fans-modal",
		loadChildren: () =>
			import("../Script/fans-modal/fans-modal.module").then(
				(m) => m.FansModalPageModule
			),
	},
	{
		path: "edit-fan",
		loadChildren: () =>
			import("../Script/edit-fan/edit-fan.module").then(
				(m) => m.EditFanPageModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ScriptPageRoutingModule {}
