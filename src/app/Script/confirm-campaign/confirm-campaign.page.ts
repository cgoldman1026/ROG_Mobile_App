import { FaqServiceService } from "./../../services/faq-service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GlobalHelpModalPage } from "../../Global/global-help-modal/global-help-modal.page";
import { ConfirmCampaignServiceService } from "../../services/confirm-campaign-service.service";

@Component({
	selector: "app-confirm-campaign",
	templateUrl: "./confirm-campaign.page.html",
	styleUrls: ["./confirm-campaign.page.scss"],
})
export class ConfirmCampaignPage implements OnInit {
	organizationName: string;
	organizationCategory: string;
	organizationImage: string;

	constructor(
		private campaignService: ConfirmCampaignServiceService,
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router
	) {}

	ngOnInit() {
		this.organizationName = this.campaignService.getOrganizationName();
		this.organizationCategory = this.campaignService.getOrganizationCategory();
		this.organizationImage = this.campaignService.getOrganizationLogo();
		this.presentModal();
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Confirm Campaign",
				questions: this.faqService.getConfirmCampaignQuestions(),
				answers: this.faqService.getConfirmCampaignAnswers(),
			},
			backdropDismiss: false,
		});
		return await modal.present();
	}
}
