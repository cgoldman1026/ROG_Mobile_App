import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ShareCampaignPageRoutingModule } from "./share-campaign-routing.module";

import { ShareCampaignPage } from "./share-campaign.page";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		ShareCampaignPageRoutingModule,
	],
	declarations: [ShareCampaignPage],
})
export class ShareCampaignPageModule {}
