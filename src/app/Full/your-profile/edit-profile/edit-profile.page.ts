import { AlertController, ModalController, Platform, ActionSheetController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { YourProfileService } from "src/app/services/your-profile.service";
import { Router } from "@angular/router";
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';


@Component({
	selector: "app-edit-profile",
	templateUrl: "./edit-profile.page.html",
	styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage implements OnInit {
	form: FormGroup;
	firstName: string;
	lastName: string;
	emailAddress: string;
	mobileNumber: string;
	imageUploaded: boolean = false;
	platformHeight;
	platformWidth;

	mobileNumberFocused = false;
	emailAddressFocused = false;

	croppedImagepath = "";

	constructor(
		private profileService: YourProfileService,
		private alertController: AlertController,
		private router: Router,
		private platform: Platform,
		private camera: Camera,
		public actionSheetController: ActionSheetController
	) {}

	ngOnInit() {
		this.firstName = this.profileService.firstName;
		this.lastName = this.profileService.lastName;
		this.emailAddress = this.profileService.emailAddress;
		this.mobileNumber = this.profileService.mobileNumber;

		this.form = new FormGroup({
			firstName: new FormControl(this.firstName, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			lastName: new FormControl(this.lastName, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			emailAddress: new FormControl(this.emailAddress, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			mobileNumber: new FormControl(this.mobileNumber, {
				updateOn: "change",
				validators: [Validators.required],
			}),
			image: new FormControl(null),
		});

		this.platformHeight = this.platform.height();
		this.platformWidth = this.platform.width();

		console.log(this.platformHeight);
		console.log(this.platformWidth);
		console.log(this.platform.is('android'))

		// console.log(this.firstName);
		// console.log(this.lastName);
		// console.log(this.emailAddress);
		// console.log(this.mobileNumber)
	}

	uploadImage() {
		console.log("Clicked!");
	}

	async presentCancelAlert() {
		const alert = await this.alertController.create({
			header: "Hold On!",
			message:
				"Are you sure you want to cancel? Your changes will be discarded.",
			buttons: [
				{
					text: "Back",
					role: "cancel",
				},
				{
					text: "Cancel",
					handler: () => {
						this.router.navigateByUrl("/full/your-profile");
					},
				},
			],
		});
		return await alert.present();
	}

	async presentNoImageAlert(isCancel) {
		const alert = await this.alertController.create({
			header: "Add Picture!",
			message:
				"Adding an action shot or selfie really helps response rates. Can you do it now?",
			buttons: [
				{
					text: "NO",
					handler: () => {
						if (isCancel) {
							this.presentCancelAlert();
						} else {
							this.profileService.setAll(this.form.get('firstName').value, this.form.get('lastName').value, this.form.get('mobileNumber').value, this.form.get('emailAddress').value)
							this.router.navigateByUrl("/full/your-profile");
						}
					},
				},
				{
					text: "YES",
					role: "cancel",
					// Need to eventually open the image picker action sheet here once we are ready for that
				},
			],
		});
		return await alert.present();
	}

	onSaveChanges() {
		if (!this.imageUploaded) {
			this.presentNoImageAlert(false);
		} else {
			this.profileService.setAll(this.form.get('firstName').value, this.form.get('lastName').value, this.form.get('mobileNumber').value, this.form.get('emailAddress').value)
			this.router.navigateByUrl("/full/your-profile");
		}
	}

	onCancel() {
		if (!this.imageUploaded) {
			this.presentNoImageAlert(true);
		} else {
			this.presentCancelAlert();
		}
	}

	toggleMobileNumberFocus() {
		this.mobileNumberFocused = true;
		this.emailAddressFocused = false;
	}

	toggleEmailFocus() {
		this.mobileNumberFocused = false;
		this.emailAddressFocused = true;
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
