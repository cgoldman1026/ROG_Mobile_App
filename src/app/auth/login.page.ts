import { FaqServiceService } from "./../services/faq-service.service";
import { AuthServiceService } from "./../services/auth-service.service";
import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import {
	LoadingController,
	ModalController,
	AlertController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { GlobalHelpModalPage } from "../Global/global-help-modal/global-help-modal.page";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
	isLoading = false;
	showModal = false;
	form: FormGroup;

	constructor(
		private loadingController: LoadingController,
		private router: Router,
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private authSerivce: AuthServiceService,
		private alertController: AlertController
	) {}

	ngOnInit() {
		// this.presentModal();
		this.form = new FormGroup({
			emailAddress: new FormControl(null, {
				updateOn: "blur",
				validators: [Validators.required, Validators.email],
			}),
			password: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
		});
		// this.presentModal();
	}

	ionViewWillEnter() {
		this.form.reset();
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
					// this.authSerivce.login();
					this.router.navigateByUrl("/full/your-scorecard");
				}, 1500);
			});
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;
		console.log(email, password);
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Login to Your Profile",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
			// backdropDismiss: false,
		});
		return await modal.present();
	}
}
