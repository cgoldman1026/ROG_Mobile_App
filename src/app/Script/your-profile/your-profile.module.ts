import { AddYourFansOnePageModule } from './../add-your-fans-one/add-your-fans-one.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { YourProfilePageRoutingModule } from "./your-profile-routing.module";

import { YourProfilePage } from "./your-profile.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		YourProfilePageRoutingModule,
		AddYourFansOnePageModule
	],
	declarations: [YourProfilePage],
})
export class YourProfilePageModule {}
