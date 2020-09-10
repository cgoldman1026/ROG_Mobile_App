import { FaqServiceService } from './../../services/faq-service.service';
import { CreateYourAccountServiceService } from "../../services/create-your-account-service.service";
import { LoadingController, AlertController, Platform } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import {
	NgForm,
	FormGroup,
	FormControl,
	Validators,
	ReactiveFormsModule,
	Form,
} from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalHelpModalPage } from "../../Global/global-help-modal/global-help-modal.page";

@Component({
	selector: "app-create-your-account",
	templateUrl: "./create-your-account.page.html",
	styleUrls: ["./create-your-account.page.scss"],
})
export class CreateYourAccountPage implements OnInit {
	isLoading = false;
	validEmail: boolean;
	form: FormGroup;

	emailAddressFocused: boolean = false;
	mobileNumberFocused: boolean = false;

	platformHeight: number;

	constructor(
		private modalController: ModalController,
		private loadingController: LoadingController,
		private router: Router,
		private accountService: CreateYourAccountServiceService,
		private alertController: AlertController,
		private faqService: FaqServiceService,
		private platform: Platform
	) {}

	ngOnInit() {
		this.form = new FormGroup({
			firstName: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			lastName: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			emailAddress: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			mobileNumber: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			password: new FormControl(null, {
				validators: [
					Validators.required,
					Validators.pattern(
						"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$"
					),
					Validators.minLength(6),
				],
			}),
		});
		this.form.reset();
		this.platformHeight = this.platform.height();
		console.log(this.platformHeight)
	}

	onCreateAccount(form: NgForm) {
		if (!form.valid) {
			return;
		}

		const firstName = form.value.firstName;
		const lastName = form.value.lastName;
		const emailAddress = form.value.emailAddress;
		const mobileNumber = form.value.mobileNumber;
		const password = form.value.password;
		console.log(firstName, lastName, emailAddress, mobileNumber, password);

		this.isLoading = true;
		this.loadingController
			.create({ keyboardClose: true, message: "Creating Your Account..." })
			.then((loadingEl) => {
				loadingEl.present();
				setTimeout(() => {
					this.isLoading = false;
					loadingEl.dismiss();

					this.validEmail = this.accountService.validateEmail(emailAddress);

					if (this.validEmail) {
						this.router.navigateByUrl("/script/tutorial");
					} else {
						this.presentAlertEmailUsed();
						console.log("invalid email address");
					}
				}, 1500);
			});
	}

	async presentAlertEmailUsed() {
		const alert = await this.alertController.create({
			header: "Email Already Used!",
			cssClass: ".alertHeader1",
			message:
				"An account already exists with that email address. Please click below to login to your existing account.",
			buttons: [
				{
					text: "Close ",
					cssClass: "primary",
					handler: (close) => {
						console.log(close);
					},
				},
				{
					text: "Login",
					handler: (login) => {
						console.log(login);
						this.router.navigateByUrl("/full/login");
					},
				},
			],
		});

		await alert.present();
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			cssClass: "my-custom-class",
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Create Your Account",
				questions: this.faqService.getCreateYourAccountQuestions(),
				answers: this.faqService.getCreateYourAccountAnswers(),
			},
		});
		return await modal.present();
	}

	toggleMobileNumberFocused() {
		this.mobileNumberFocused = true;
		this.emailAddressFocused = false;
	}

	toggleEmailAddressFocused() {
		this.emailAddressFocused = true;
		this.mobileNumberFocused = false;
	}

}
