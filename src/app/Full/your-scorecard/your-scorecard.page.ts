import { DonationServiceService } from "./../../services/donation-service.service";
import { Subscription } from "rxjs";
import { FanServiceService } from "src/app/services/fan-service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";
import { ScorecardServiceService } from "src/app/services/scorecard-service.service";
import { FaqServiceService } from 'src/app/services/faq-service.service';

@Component({
	selector: "app-your-scorecard",
	templateUrl: "./your-scorecard.page.html",
	styleUrls: ["./your-scorecard.page.scss"],
})
export class YourScorecardPage implements OnInit {
	fansSub: Subscription;
	fansList;

	donationsSub: Subscription;
	donations;

	fundsRaised = 0;
	fansAdded;

	numberOfDonations;

	nationalFansAverage;

	nationalDonationsAverage;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private scorecardService: ScorecardServiceService,
		private alertController: AlertController,
		private router: Router,
		private fansService: FanServiceService,
		private donationService: DonationServiceService
	) {}

	ngOnInit() {
		this.fansSub = this.fansService.fans.subscribe((fans) => {
			this.fansList = fans;
		});
		this.donationsSub = this.donationService.donations.subscribe(
			(donations) => {
				this.donations = donations;
			}
		);

		// console.log(this.fansList.length);

		// this.fundsRaised = this.scorecardService.getFundsRaised();
		this.fansAdded = this.fansList.length;
		this.numberOfDonations = this.donations.length;
		this.nationalFansAverage = this.scorecardService.getNationalFansAverage();
		this.nationalDonationsAverage = this.scorecardService.getNationalDonationsAverage();

		for (const donation of this.donations) {
			this.fundsRaised += +donation.donorAmount;
		}

		console.log(this.fundsRaised);
	}

	ionViewWillEnter() {
		this.fansSub = this.fansService.fans.subscribe((fans) => {
			this.fansList = fans;
		});
		// console.log(this.fansList.length);
		this.fansAdded = this.fansList.length;
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Your Scorecard",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}
}
