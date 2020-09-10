import { Router } from '@angular/router';
import { FaqServiceService } from "./../../services/faq-service.service";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";

@Component({
	selector: "app-faq",
	templateUrl: "./faq.page.html",
	styleUrls: ["./faq.page.scss"],
})
export class FaqPage implements OnInit {
	faqMaterials;
	selectedTitle: string;
	selectedQuestions;
	selectedAnswers;

	presentationView = false;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router
	) {
		this.faqMaterials = this.faqService.getMaterials();
	}

	ngOnInit() {}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Frequently Asked Questions",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}

	onNormalView() {
		this.presentationView = false;
	}

	onClick(object) {
		this.selectedTitle = object["category"];
		this.selectedQuestions = object["questions"];
		this.selectedAnswers = object["answers"];
		this.presentationView = true;
	}
}
