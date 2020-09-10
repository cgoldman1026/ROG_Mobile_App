import { ModalController, NavParams, Platform } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import {
	FormGroup,
	FormControl,
	Validators,
	NgForm,
	Form,
} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
	selector: "app-contact-us",
	templateUrl: "./contact-us.page.html",
	styleUrls: ["./contact-us.page.scss"],
})
export class ContactUsPage implements OnInit {
	form: FormGroup;
	// messageLength: string = '0';
	focused;

	emailAddressFocused: boolean = false;
	mobileNumberFocused: boolean = false;
	messageFocused: boolean = false;

	platformHeight: number;

	originURL: string;

	constructor(
		private modalController: ModalController,
		private router: Router,
		private platform: Platform
	) {}

	ngOnInit() {
		this.form = new FormGroup({
			fullName: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			emailAddress: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			mobileNumber: new FormControl(null, {
				updateOn: "change",
			}),
			teamName: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			message: new FormControl(null, {
				validators: [Validators.required],
			}),
		});
		this.form.reset();
		this.originURL = this.router.url.replace('/contact-us', '');
		this.platformHeight = this.platform.height();
		console.log(this.originURL)
	}

	onSubmit(form: NgForm) {
		console.log(form.value.name);
	}

	dismiss() {
		this.modalController.dismiss({
			dismissed: true,
		});
	}

	toggleEmailAddressFocused() {
		this.emailAddressFocused = true;
		this.mobileNumberFocused = false;
		this.messageFocused = false;
	}
	toggleMobileNumberFocused() {
		this.emailAddressFocused = false;
		this.mobileNumberFocused = true;
		this.messageFocused = false;
	}
	toggleMessageFocused() {
		this.emailAddressFocused = false;
		this.mobileNumberFocused = false;
		this.messageFocused = true;
	}
}
