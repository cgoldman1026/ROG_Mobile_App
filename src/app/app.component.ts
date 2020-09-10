import { AuthServiceService } from "./services/auth-service.service";
import { Component } from "@angular/core";
import { Plugins, Capacitor } from "@capacitor/core";


import { Platform, LoadingController, AlertController, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"],
})
export class AppComponent {
	isLoading = false;

	constructor(
		private platform: Platform,
		private router: Router,
		private loadingController: LoadingController,
		private alertController: AlertController,
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			if (Capacitor.isPluginAvailable("SplashScreen")) {
				Plugins.SplashScreen.hide();
			}
		});
	}

	onLogout() {
		this.isLoading = true;
		this.loadingController
			.create({ keyboardClose: true, message: "Logging out..." })
			.then((loadingEl) => {
				loadingEl.present();
				setTimeout(() => {
					this.isLoading = false;
					loadingEl.dismiss();
					this.router.navigateByUrl("/full/login");
				}, 500);
			});
	}

	async presentAlertLogout(event) {
		const alert = await this.alertController.create({
			header: "Logout",
			message:
				"Are you sure you want to fully logout of your Reaching Our Goal account? You will need your email and password to sign back in.",
			buttons: [
				{
					text: "Cancel",
					role: "cancel",
				},
				{
					text: "Logout",
					handler: () => this.onLogout(),
				},
			],
		});

		await alert.present();
	}

	getUrl() {
		return this.router.url
	}
}
