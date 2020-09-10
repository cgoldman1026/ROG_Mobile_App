import { Component, OnInit, Input } from "@angular/core";
import {
	FormGroup,
	ValidationErrors,
	FormControl,
	Validators,
} from "@angular/forms";
import { RelationshipsService } from "src/app/services/relationships.service";
import { ModalController, Platform } from "@ionic/angular";
import { SalutationServiceService } from "src/app/services/salutation-service.service";
import { FanServiceService } from "src/app/services/fan-service.service";
import { ActivationEnd, ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-edit-fan",
	templateUrl: "./edit-fan.page.html",
	styleUrls: ["./edit-fan.page.scss"],
})
export class EditFanPage implements OnInit {
	form: FormGroup;
	relationships;
	salutation: string;

	platformHeight: number;
	platformWidth: number;

	salutationFocused = false;
	mobileNumberFocused = false;
	emailAddressFocused = false;

	fanToEdit;

	editFanFirstName = "";
	editFanLastName = "";
	editFanRelationshipString = "";
	editFanSalutation = "";
	editFanMobileNumber = "";
	editFanEmailAddress = "";

	constructor(
		private relationshipService: RelationshipsService,
		private salutationService: SalutationServiceService,
		private platform: Platform,
		private fanService: FanServiceService,
		private router: Router
	) {
		this.relationships = this.relationshipService.getAllRelationships();
	}

	ngOnInit() {
		this.fanToEdit = this.fanService.fanToEdit;

		if (this.fanToEdit) {
			this.editFanFirstName = this.fanToEdit.fanFirstName;
			this.editFanLastName = this.fanToEdit.fanLastName;
			this.editFanRelationshipString = this.fanToEdit.fanRelationship;
			this.editFanSalutation = this.fanToEdit.fanSalutation;
			this.editFanMobileNumber = this.fanToEdit.fanMobileNumber;
			this.editFanEmailAddress = this.fanToEdit.fanEmailAddress;
		}

		if (this.editFanSalutation.includes("Dear")) {
			this.editFanSalutation = this.editFanSalutation
				.replace("Dear", "")
				.replace(" ", "");
		}

		this.form = new FormGroup(
			{
				fanFirstName: new FormControl(this.editFanFirstName, {
					updateOn: "change",
					validators: [Validators.required],
				}),
				fanLastName: new FormControl(this.editFanLastName, {
					updateOn: "change",
					validators: [Validators.required],
				}),
				fanRelationship: new FormControl(this.editFanRelationshipString, {
					updateOn: "blur",
					validators: [Validators.required],
				}),
				fanSalutation: new FormControl(this.editFanSalutation, {
					updateOn: "change",
					validators: [Validators.required],
				}),
				fanEmailAddress: new FormControl(this.editFanEmailAddress, {
					updateOn: "blur",
				}),
				fanMobileNumber: new FormControl(this.editFanMobileNumber, {
					updateOn: "change",
				}),
			},
			{ validators: this.atLeastOne("fanEmailAddress", "fanMobileNumber") }
		);
		this.platformHeight = this.platform.height();
		this.platformWidth = this.platform.width();
	}

	atLeastOne(...fields: string[]) {
		// console.log("Error in at least one!");
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
		let relationshipText = this.form.get("fanRelationship").value;
		let firstName = this.form.get("fanFirstName").value;
		let lastName = this.form.get("fanLastName").value;

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

	saveChanges() {
		// console.log('First Name: ', this.form.get('fanFirstName').valid);
		// console.log('Last Name: ', this.form.get('fanLastName').valid);
		// console.log('Relationship: ', this.form.get('fanRelationship').valid);
		// console.log('Salutation: ', this.form.get('fanSalutation').valid);
		// console.log('Mobile Number: ', this.form.get('fanMobileNumber').valid);
		// console.log('Email Address: ', this.form.get('fanEmailAddress').valid);

		let edited_fan = {
			fanFirstName: this.form.get("fanFirstName").value,
			fanLastName: this.form.get("fanLastName").value,
			fanRelationship: this.form.get("fanRelationship").value,
			fanSalutation: "Dear " + this.form.get("fanSalutation").value,
			fanMobileNumber: this.form.get("fanMobileNumber").value
				? this.form.get("fanMobileNumber").value
				: "No Mobile Number",
			fanEmailAddress: this.form.get("fanEmailAddress").value
				? this.form.get("fanEmailAddress").value
				: "No Email Address",
		};

		if (edited_fan !== this.fanToEdit) {
			let fansList;
			let fansSub = this.fanService.fans.subscribe(data => {
				fansList = data;
			})
			let fanIndex = fansList.indexOf(this.fanToEdit);
			console.log('INDEX OF FAN TO EDIT', fanIndex)
			this.fanService.deleteFan(this.fanToEdit, false);
			this.fanService.editFan(edited_fan, fanIndex);
		} else {
			this.router.navigateByUrl(this.fanService.redirectURL);
		}
	}
}
