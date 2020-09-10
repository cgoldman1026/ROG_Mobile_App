import { Subscription } from "rxjs";
import { EditProfilePage } from "./edit-profile/edit-profile.page";
import { YourProfileService } from "./../../services/your-profile.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, ActionSheetController } from "@ionic/angular";
import { GlobalHelpModalPage } from "src/app/Global/global-help-modal/global-help-modal.page";
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { FaqServiceService } from 'src/app/services/faq-service.service';

@Component({
	selector: "app-your-profile",
	templateUrl: "./your-profile.page.html",
	styleUrls: ["./your-profile.page.scss"],
})
export class YourProfilePage implements OnInit {
	fullName: string;
	image;
	emailAddress;
	mobileNumber;
	fullNameSub: Subscription;

	imageUploaded: boolean = false;
	imageSource: string;

	croppedImagepath = "";


	imagePickerOptions = {
		maximumImagesCount: 1,
		quality: 50,
	};

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private profileService: YourProfileService,
		private camera: Camera,
		public actionSheetController: ActionSheetController,
		private router: Router,
		// private file: File
	) {}

	ngOnInit() {
		this.fullName = `${this.profileService.firstName} ${this.profileService.lastName}`;
		this.emailAddress = this.profileService.emailAddress;
		this.mobileNumber = this.profileService.mobileNumber;
		console.log("First Name: ", this.profileService.firstName);
		console.log("Last Name: ", this.profileService.lastName);
		console.log("Email Address: ", this.profileService.emailAddress);
		console.log("Mobile Number: ", this.profileService.mobileNumber);
	}

	ionViewWillEnter() {
		this.fullName = `${this.profileService.firstName} ${this.profileService.lastName}`;
		this.emailAddress = this.profileService.emailAddress;
		this.mobileNumber = this.profileService.mobileNumber;
		console.log("First Name: ", this.profileService.firstName);
		console.log("Last Name: ", this.profileService.lastName);
		console.log("Email Address: ", this.profileService.emailAddress);
		console.log("Mobile Number: ", this.profileService.mobileNumber);
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Your Profile",
				questions: this.faqService.getTutorialQuestions(),
				answers: this.faqService.getTutorialAnswers(),
			},
		});
		return await modal.present();
	}

	pickImage(sourceType) {
		const options: CameraOptions = {
			quality: 100,
			sourceType: sourceType,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
		};
		this.camera.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				this.croppedImagepath = "data:image/jpeg;base64," + imageData;
			},
			(err) => {
				// Handle error
			}
		);
	}

	async selectImage() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select Image Source",
			buttons: [
				{
					text: "Photo Library",
					handler: () => {
						this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
					},
				},
				{
					text: "Camera",
					handler: () => {
						this.pickImage(this.camera.PictureSourceType.CAMERA);
					},
				},
				{
					text: "Cancel",
					role: "cancel",
				},
			],
		});
		await actionSheet.present();
	}
}
