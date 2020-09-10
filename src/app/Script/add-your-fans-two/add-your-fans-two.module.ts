// import { PhoneMaskDirective } from './../../phone-mask.directive';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddYourFansTwoPageRoutingModule } from "./add-your-fans-two-routing.module";

import { AddYourFansTwoPage } from "./add-your-fans-two.page";
import { AddYourFansOnePageModule } from '../add-your-fans-one/add-your-fans-one.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AddYourFansTwoPageRoutingModule,
		AddYourFansOnePageModule
	],
	declarations: [AddYourFansTwoPage],
})
export class AddYourFansTwoPageModule {}
