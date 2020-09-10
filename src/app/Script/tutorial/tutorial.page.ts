import { FaqServiceService } from './../../services/faq-service.service';
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { GlobalHelpModalPage } from "../../Global/global-help-modal/global-help-modal.page";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-tutorial",
	templateUrl: "./tutorial.page.html",
	styleUrls: ["./tutorial.page.scss"],
})
export class TutorialPage implements OnInit {
	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router
	) {}

	ngOnInit() {}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Reaching Our Goal Tutorial",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}

	dismiss() {
		this.modalController.dismiss({
			dismissed: true,
		});
	}
}
