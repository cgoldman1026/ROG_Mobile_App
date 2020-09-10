import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShareCampaignPage } from "./share-campaign.page";

const routes: Routes = [
	{
		path: "tabs",
		component: ShareCampaignPage,
		children: [
			{
				path: "add-fans",
				loadChildren: () =>
					import("./add-fans/add-fans.module").then((m) => m.AddFansPageModule),
			},
			{
				path: "social-sharing",
				loadChildren: () =>
					import("./social-sharing/social-sharing.module").then(
						(m) => m.SocialSharingPageModule
					),
			},
			{
				path: "",
				redirectTo: "/full/share-campaign/tabs/add-fans",
				pathMatch: "full",
			},
		],
	},
	{
		path: "",
		redirectTo: "/full/share-campaign/tabs/add-fans",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ShareCampaignPageRoutingModule {}
