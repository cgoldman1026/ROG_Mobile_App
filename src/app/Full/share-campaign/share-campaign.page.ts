import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RelationshipsService } from 'src/app/services/relationships.service';
import { FaqServiceService } from 'src/app/services/faq-service.service';

@Component({
	selector: "app-share-campaign",
	templateUrl: "./share-campaign.page.html",
	styleUrls: ["./share-campaign.page.scss"],
})
export class ShareCampaignPage implements OnInit {
	addFansSelected = true;
	socialSharingSelected = false;
	form: FormGroup;
	relationships;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router,
		private relationshipService: RelationshipsService
	) {
		this.relationships = this.relationshipService.getAllRelationships();
	}

	ngOnInit() {
		console.log('in it!')
		this.form = new FormGroup({
			firstName: new FormControl(null, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			lastName: new FormControl(null, {
				updateOn: "blur",
				validators: [Validators.required],
			}),
			relationship: new FormControl(null, {
				updateOn: "blur",
				validators: [Validators.required],
			}),
			salutation: new FormControl(null, {
				updateOn: "blur",
				validators: [Validators.required],
			}),
			fanEmailAddress: new FormControl(null, {
				updateOn: "blur",
				validators: [Validators.required],
			}),
			fanPhoneNumber: new FormControl(null, {
				updateOn: "blur",
				validators: [Validators.required],
			}),
		});
		this.form.reset();
		
		if (this.router.url.includes('social-sharing')) {
			this.addFansSelected = false;
			this.socialSharingSelected = true;
		}
		else {
			this.addFansSelected = true;
			this.socialSharingSelected = false;
		}
	}


	async presentModal() {
		console.log(this.router.url);
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Frequently Asked Questions",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}

	onAddFans() {
		this.addFansSelected = true;
		this.socialSharingSelected = false;
	}

	onSocialSharing() {
		this.addFansSelected = false;
		this.socialSharingSelected = true;
	}
}
