import { ModalController } from "@ionic/angular";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RelationshipsService } from 'src/app/services/relationships.service';
import { SalutationServiceService } from 'src/app/services/salutation-service.service';

@Component({
	selector: "app-edit-fan",
	templateUrl: "./edit-fan.page.html",
	styleUrls: ["./edit-fan.page.scss"],
})
export class EditFanPage implements OnInit {
	@Input() fanFirstName: string;
	@Input() fanLastName: string;
	@Input() fanRelationship: string;
	@Input() fanMessageStarter: string;
	@Input() fanEmailAddress: string;
	@Input() fanMobileNumber: string;

	form: FormGroup;
	relationships;
	salutation: string = "";

	constructor(
		private modalController: ModalController,
		private router: Router,
		private relationshipService: RelationshipsService,
		private salutationService: SalutationServiceService
	) {}

	ngOnInit() {
		this.form = new FormGroup({
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
		});
  }
  
  getSalutation() {
		let relationshipText = this.form.controls.fanRelationship.value;
		this.salutation = this.salutationService.getSaluation(relationshipText, this.form.get('fanFirstName').value, this.form.get('fanLastName').value);
	}

	dismiss() {
		this.modalController.dismiss({
			dismissed: true,
		});
		this.router.navigateByUrl("/script/add-your-fans-one");
	}
}
