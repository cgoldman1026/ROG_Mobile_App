import { FaqServiceService } from './../../../services/faq-service.service';
import { SalutationServiceService } from "./../../../services/salutation-service.service";
import { FanServiceService } from "./../../../services/fan-service.service";
import { ModalController, Platform } from "@ionic/angular";
import { RelationshipsService } from "./../../../services/relationships.service";
import { Component, OnInit } from "@angular/core";
import {
	FormGroup,
	Validators,
	FormControl,
	ValidationErrors,
} from "@angular/forms";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";

@Component({
	selector: "app-add-fans",
	templateUrl: "./add-fans.page.html",
	styleUrls: ["./add-fans.page.scss"],
})
export class AddFansPage implements OnInit {
	form: FormGroup;
	relationships;
	salutation: string;
	platformHeight: number;
	platformWidth: number;
	salutationFocused = false;
	mobileNumberFocused = false;
	emailAddressFocused = false;

	constructor(
		private relationshipService: RelationshipsService,
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private salutationService: SalutationServiceService,
		private platform: Platform,
		private fanService: FanServiceService
	) {
		this.relationships = this.relationshipService.getAllRelationships();
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

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				sectionTitle: "Frequently Asked Questions",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
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
	}

	updateSalutation() {
		let relationshipText = this.form.get('fanRelationship').value;
		let firstName = this.form.get('fanFirstName').value;
		let lastName = this.form.get('fanLastName').value;

		if (relationshipText && firstName && lastName) {
			this.salutation = this.salutationService.getSaluation(
				relationshipText,
				firstName,
				lastName
			);
		}
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

	addFan(form: FormGroup) {
		let fan = {
			fanFirstName: form.get("fanFirstName").value,
			fanLastName: form.get("fanLastName").value,
			fanRelationship: form.get("fanRelationship").value,
			fanSalutation: 'Dear ' + form.get("fanSalutation").value,
			fanMobileNumber: form.get("fanMobileNumber").value
				? form.get("fanMobileNumber").value
				: "",
			fanEmailAddress: form.get("fanEmailAddress").value
				? form.get("fanEmailAddress").value
				: "",
		};

		this.fanService.addFan(fan);
		this.form.reset()

		// console.log(fan);
	}
}
