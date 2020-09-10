import { FaqServiceService } from './../../services/faq-service.service';
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { PickYourRewardService } from "../../services/pick-your-reward.service";
import { Component, OnInit } from "@angular/core";
import { GlobalHelpModalPage } from "../../Global/global-help-modal/global-help-modal.page";

@Component({
	selector: "app-pick-your-reward",
	templateUrl: "./pick-your-reward.page.html",
	styleUrls: ["./pick-your-reward.page.scss"],
})
export class PickYourRewardPage implements OnInit {
	rewards = [];

	constructor(
		private rewardService: PickYourRewardService,
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router
	) {}

	ngOnInit() {
		// this.rewards = this.rewardService.getNoRewards();
		// this.rewards = this.rewardService.getOneReward();
		this.rewards = this.rewardService.getTwoRewards();
		// this.rewards = this.rewardService.getThreeRewards();
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Pick Your Reward",
				questions: this.faqService.getRewardsQuestions(),
				answers: this.faqService.getRewardsAnswers(),
			},
		});
		return await modal.present();
	}

	onNext(radioGroup) {
		//   console.log(radioGroup)
		//   if (radioGroup.value === "ion-rb-0") {
		//     console.log("First Reward Chosen")
		//   }
		//   if (radioGroup.value === "ion-rb-1") {
		//     console.log("Second Reward Chosen")
		//   }
		//   if (radioGroup.value === "ion-rb-2") {
		//     console.log("Third Reward Chosen")
		//   }
	}

	onClick() {
		console.log("clicked");
	}
}
