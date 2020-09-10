import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-share-campaign",
	templateUrl: "./share-campaign.page.html",
	styleUrls: ["./share-campaign.page.scss"],
})
export class ShareCampaignPage implements OnInit {
	constructor(
		private alertController: AlertController,
		private router: Router
	) {}

	numberFansAdded = 1;
	requiredNumberFans = 15;

	goodStartMessage: string = `
	<p>So far, you've added ${this.numberFansAdded} ${this.numberFansAdded == 1 ? 'fan': 'fans'} to your campaign.</p>
	<p>That's a good start, but the goal is to add ${this.requiredNumberFans} or more fans.</p>
	<p>Can you quickly add some more right now?</p>`;
	youDidItMessage: string = `
	<p>You've added ${this.numberFansAdded} fans to your campaign. Nice work.</p>  
	<p>If your campaign included a participation reward, you've earned it. Yes!</p>
	<p>Before you go, did you leave anyone out?</p>`;

	ngOnInit() {}

	onFacebookClick() {
		console.log("Facebook clicked!");
	}

	onTwitterClick() {
		console.log("Twitter clicked!");
	}

	onInstagramClick() {
		console.log("Instagram clicked!");
	}

	async presentSummaryAlert() {
		const alert = await this.alertController.create({
			header:
				this.numberFansAdded < this.requiredNumberFans
					? "Good Start!"
					: "You Did It!",
			message:
				this.numberFansAdded < this.requiredNumberFans
					? this.goodStartMessage
					: this.youDidItMessage,
			buttons: [
				{
					text: "NO",
					handler: () => {
						this.router.navigateByUrl("/full/your-scorecard");
					},
				},
				{
					text: "YES",
					handler: () => {
						this.router.navigateByUrl("/full/add-fans");
					},
				},
			],
		});
		return await alert.present();
	}
}
