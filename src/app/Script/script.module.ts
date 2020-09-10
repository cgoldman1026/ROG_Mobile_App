import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ScriptPageRoutingModule } from "./script-routing.module";

import { ScriptPage } from "./script.page";
import { PhoneMaskDirective } from "../phone-mask.directive";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ScriptPageRoutingModule],
	declarations: [ScriptPage],
})
export class ScriptPageModule {}
