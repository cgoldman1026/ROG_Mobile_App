import { FaqServiceService } from './../../services/faq-service.service';
import { ModalController, LoadingController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalHelpModalPage } from '../../Global/global-help-modal/global-help-modal.page';

@Component({
	selector: "app-forgot-password",
	templateUrl: "./forgot-password.page.html",
	styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
	isLoading = false;

	constructor(
		private modalController: ModalController,
		private loadingController: LoadingController,
		private router: Router,
		private faqService: FaqServiceService
	) {}

	ngOnInit() {}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Forgot Password",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}

	onSubmit(form: NgForm) {
		console.log(form.value);
	}

	onLogin() {
		this.isLoading = true;
		this.loadingController
			.create({ keyboardClose: true, message: "Logging in..." })
			.then((loadingEl) => {
				loadingEl.present();
				setTimeout(() => {
					this.isLoading = false;
					loadingEl.dismiss();
					this.router.navigateByUrl("/confirm-campaign");
				}, 1500);
			});
	}
}
