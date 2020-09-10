import { FaqServiceService } from './../../services/faq-service.service';
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {
	LoadingController,
	AlertController,
	ModalController,
} from "@ionic/angular";
import { CampaignPinNumberServiceService } from "../../services/campaign-pin-number-service.service";
import { GlobalHelpModalPage } from "../../Global/global-help-modal/global-help-modal.page";

@Component({
	selector: "app-campaign-pin-number",
	templateUrl: "./campaign-pin-number.page.html",
	styleUrls: ["./campaign-pin-number.page.scss"],
})
export class CampaignPINNumberPage implements OnInit {
	isLoading = false;
	validPin: boolean;

	constructor(
		private router: Router,
		private loadingController: LoadingController,
		private modalController: ModalController,
		private pinService: CampaignPinNumberServiceService,
		private alertController: AlertController,
		private faqService: FaqServiceService
	) {}

	ngOnInit() {}

	async presentAlert() {
		const alert = await this.alertController.create({
			header: "Invalid PIN",
			message: "The PIN you entered is invalid. Please try again.",
			buttons: ["OK"],
		});

		await alert.present();
	}

	onSubmit(form: NgForm) {
		this.isLoading = true;
		this.loadingController
			.create({
				keyboardClose: true,
				message: "Validating PIN...",
			})
			.then((loadingElement) => {
				loadingElement.present();
				setTimeout(() => {
					this.isLoading = false;
					this.validPin = this.pinService.pinHandler(form.value.pin);
					loadingElement.dismiss();

					if (this.validPin) {
						form.reset();
						this.router.navigateByUrl("/script/confirm-campaign");
					} else {
						this.presentAlert();
						console.log(form.value.pin);
						form.reset();
					}
				}, 500);
			});
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Campaign PIN Number",
				questions: this.faqService.getCampaignPinNumberQuestions(),
				answers: this.faqService.getCampaignPinNumberAnswers(),
			},
		});
		return await modal.present();
	}
}
