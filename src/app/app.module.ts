import { PhoneMaskDirective } from "./phone-mask.directive";
import { FansModalPage } from "src/app/Script/fans-modal/fans-modal.page";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { GlobalHelpModalPage } from "./Global/global-help-modal/global-help-modal.page";
import { ScrollVanishDirective } from "./Global/scroll-vanish.directive";

import { Camera } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";

@NgModule({
	declarations: [
		AppComponent,
		GlobalHelpModalPage,
		ScrollVanishDirective,
		FansModalPage,
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		ReactiveFormsModule,
		// PhoneMaskDirective
	],

	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		File,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
