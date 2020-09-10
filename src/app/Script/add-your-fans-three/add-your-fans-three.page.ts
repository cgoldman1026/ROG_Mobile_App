import { FaqServiceService } from './../../services/faq-service.service';
import { SalutationServiceService } from "./../../services/salutation-service.service";
import { RelationshipsService } from "./../../services/relationships.service";
import { ModalController, AlertController } from "@ionic/angular";
import { Component, OnInit, ɵConsole } from "@angular/core";
import {
	FormGroup,
	FormControl,
	Validators,
	ValidationErrors,
} from "@angular/forms";
import { GlobalHelpModalPage } from "../../Global/global-help-modal/global-help-modal.page";
import { Router } from "@angular/router";
import { FansModalPage } from "src/app/Script/fans-modal/fans-modal.page";
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-add-your-fans-three',
  templateUrl: './add-your-fans-three.page.html',
  styleUrls: ['./add-your-fans-three.page.scss'],
})
export class AddYourFansThreePage implements OnInit {

  form: FormGroup;
	relationships;
	salutation: string = "";
	relationship = 'Godparents, Family Friends & Neighbors;'
	platformWidth: number;
	platformHeight: number;
	salutationFocused = false;
	mobileNumberFocused = false;
	emailAddressFocused = false;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private relationshipService: RelationshipsService,
		private salutationService: SalutationServiceService,
		private alertController: AlertController,
		private router: Router,
		private platform: Platform
	) {
		this.relationships = this.relationshipService.getRuleThreeRelationships();
	}

	ngOnInit() {
		this.form = new FormGroup(
			{
				fanFirstName: new FormControl(null, {
					updateOn: "change",
					validators: [Validators.required],
				}),
				fanLastName: new FormControl(null, {
					updateOn: "change",
					validators: [Validators.required],
				}),
				fanRelationship: new FormControl(null, {
					updateOn: "blur",
					validators: [Validators.required],
				}),
				fanSalutation: new FormControl(null, {
					updateOn: "change",
					validators: [Validators.required],
				}),
				fanEmailAddress: new FormControl(null, {
					updateOn: "change",
					// validators: [Validators.required],
				}),
				fanMobileNumber: new FormControl(null, {
					updateOn: "change",
					// validators: [Validators.required],
				}),
			},
			{ validators: this.atLeastOne("fanEmailAddress", "fanMobileNumber") }
		);
		this.form.reset();
		this.platformHeight = this.platform.height();
		this.platformWidth = this.platform.width();
	}

	atLeastOne(...fields: string[]) {
		return (fg: FormGroup): ValidationErrors | null => {
			return fields.some((fieldName) => {
				const field = fg.get(fieldName).value;
				if (typeof field === "number")
					return field && field >= 0 ? true : false;
				if (typeof field === "string")
					return field && field.length > 0 ? true : false;
			})
				? null
				: ({
						atLeastOne: "At least one field has to be provided.",
				  } as ValidationErrors);
		};
	}

	getSalutation() {
		let relationshipText = this.form.controls.fanRelationship.value;
		let firstName = this.form.controls.fanFirstName.value;
		let lastName = this.form.controls.fanLastName.value;
		if (relationshipText && firstName && lastName) {
			this.salutation = this.salutationService.getSaluation(
				relationshipText,
				firstName,
				lastName
			);
		}
		console.log("GET", relationshipText);
		console.log("GET", firstName);
		console.log("GET", lastName);
	}

	updateSalutation() {
		let relationshipText = this.form.controls.fanRelationship.value;
		let firstName = this.form.controls.fanFirstName.value;
		let lastName = this.form.controls.fanLastName.value;

		if (relationshipText && firstName && lastName) {
			this.salutation = this.salutationService.getSaluation(
				relationshipText,
				firstName,
				lastName
			);
		}
		console.log("UPDATE", relationshipText);
		console.log("UPDATE", firstName);
		console.log("UPDATE", lastName);
	}

	toggleSalutationFocus() {
		this.salutationFocused = true;
		this.mobileNumberFocused = false;
		this.emailAddressFocused = false;
	}

	toggleMobileNumberFocus() {
		this.salutationFocused = false;
		this.mobileNumberFocused = true;
		this.emailAddressFocused = false;
	}

	toggleEmailFocus() {
		this.salutationFocused = false;
		this.mobileNumberFocused = false;
		this.emailAddressFocused = true;
	}

	onAddFan(form) {
		if (!form.controls.fanEmailAddress.value) {
			this.presentNoEmailAlert(
				form.controls.fanFirstName.value,
				form.controls.fanLastName.value
			);
		} else if (!form.controls.fanMobileNumber.value) {
			this.presentNoMobileNumber(
				form.controls.fanFirstName.value,
				form.controls.fanLastName.value
			);
		} else {
			// Need to handle sending this information to the database
			this.presentFanAddedAlert(
				form.controls.fanFirstName.value,
				form.controls.fanLastName.value
			);
		}
	}

	async presentHelpModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Add Your Fans",
				questions: this.faqService.getAddYourFansQuestions(),
				answers: this.faqService.getAddYourFansAnswers(),
			},
		});
		return await modal.present();
	}

	async presentFansModal() {
		const modal = await this.modalController.create({
			component: FansModalPage,
		});
		return await modal.present();
	}

	async presentFanAddedAlert(firstName, lastName) {
		const alert = await this.alertController.create({
			header: "Fan Added!",
			message: `${firstName} ${lastName} was added to your campaign! Can you add more ${this.relationship}?`,
			buttons: [
				{
					text: "NO",
					handler: () => {
						this.router.navigateByUrl("/script/add-your-fans-four");
					},
				},
				{
					text: "YES",
					role: "cancel",
					handler: () => {
						this.form.reset();
					},
				},
			],
		});
		return await alert.present();
	}

	async presentNoEmailAlert(firstName: string, lastName: string) {
		const alert = await this.alertController.create({
			header: "No Email Address?",
			message: `Email addresses typically yield awesome results! Can you add one for ${firstName} ${lastName}?`,
			buttons: [
				{
					text: "NO",
					handler: () => {
						this.presentFanAddedAlert(firstName, lastName);
					},
				},
				{
					text: "YES",
					role: "cancel",
				},
			],
		});
		return await alert.present();
	}

	async presentNoMobileNumber(firstName: string, lastName: string) {
		const alert = await this.alertController.create({
			header: "No Mobile Number?",
			message: `Mobile numbers typically yield excellent results! Can you add one for ${firstName} ${lastName}?`,
			buttons: [
				{
					text: "NO",
					handler: () => {
						this.presentFanAddedAlert(firstName, lastName);
					},
				},
				{
					text: "YES",
					role: "cancel",
				},
			],
		});
		return await alert.present();
	}

}
