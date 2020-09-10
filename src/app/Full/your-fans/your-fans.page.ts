import { FanServiceService } from "./../../services/fan-service.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FaqServiceService } from 'src/app/services/faq-service.service';

@Component({
	selector: "app-your-fans",
	templateUrl: "./your-fans.page.html",
	styleUrls: ["./your-fans.page.scss"],
})
export class YourFansPage implements OnInit {
	// your_fans;
	fans;
	private fansSub: Subscription;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private fanService: FanServiceService,
		private router: Router
	) {}

	ngOnInit() {
		this.fansSub = this.fanService.fans.subscribe((data) => {
			this.fans = data;
		});
		// console.log('THIS.FANS FROM YOUR_FANS', this.fans)
	}

	ionViewWillEnter() {
		this.fansSub = this.fanService.fans.subscribe((data) => {
			this.fans = data;
		});
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Your Fans",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}

	editFan(fan) {
		this.fanService.editFanInitial(fan, '/full/your-fans');
	}

	deleteFan(fan) {
		this.fanService.deleteFan(fan, true);
	}

	// async presentEditModal(fan) {
	// 	const modal = await this.modalController.create({
	// 		component: EditFanPage,
	// 		componentProps: {
	// 			fanFirstName: fan.fanFirstName,
	// 			fanLastName: fan.fanLastName,
	// 			fanRelationship: fan.fanRelationship,
	// 			fanSalutation: fan.fanMessageStarter,
	// 			fanEmailAddress: fan.fanEmailAddress,
	// 			fanMobileNumber: fan.fanMobileNumber,
	// 		},
	// 	});
	// 	return await modal.present();
	// }
}
