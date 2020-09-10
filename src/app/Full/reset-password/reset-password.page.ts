import { FaqServiceService } from './../../services/faq-service.service';
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
	selector: "app-reset-password",
	templateUrl: "./reset-password.page.html",
	styleUrls: ["./reset-password.page.scss"],
})
export class ResetPasswordPage implements OnInit {
	form: FormGroup;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router,
	) {}

	ngOnInit() {
		this.form = new FormGroup({
			password: new FormControl(null, {
				updateOn: 'change',
				validators: [
					Validators.required,
					Validators.pattern(
						"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$"
					),
					Validators.minLength(6),
				],
			}),
		});
	}

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

	onSubmit() {
		console.log(this.form.get("password").value);
	}
}
