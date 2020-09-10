import { FaqServiceService } from './../../services/faq-service.service';
import { Subscription } from "rxjs";
import { FanServiceService } from "src/app/services/fan-service.service";
import { PickYourRewardService } from "./../../services/pick-your-reward.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";
import { Router } from '@angular/router';

@Component({
	selector: "app-reward-progress",
	templateUrl: "./reward-progress.page.html",
	styleUrls: ["./reward-progress.page.scss"],
})
export class RewardProgressPage implements OnInit {
	reward;
	fansSub: Subscription;
	fansList;
	numberSupporters: number;
	numberRequiredSupporters: number = 15;
	platformHeight: number;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private rewardService: PickYourRewardService,
		private fanService: FanServiceService,
		private platform: Platform,
		private router: Router
	) {}

	ngOnInit() {
		this.reward = this.rewardService.getOneReward();
		this.fansSub = this.fanService.fans.subscribe((fans) => {
			this.fansList = fans;
		});
		this.numberSupporters = this.fansList.length;
		this.platformHeight = this.platform.height();
	}

	ionViewWillEnter() {
		this.fansSub = this.fanService.fans.subscribe((fans) => {
			this.fansList = fans;
		});
		this.numberSupporters = this.fansList.length;
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Reward Progress",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}
}
