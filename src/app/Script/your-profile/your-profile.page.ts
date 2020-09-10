import { FaqServiceService } from './../../services/faq-service.service';
import { YourProfileService } from "../../services/your-profile.service";
import { ModalController, AlertController, ActionSheetController, Platform } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { GlobalHelpModalPage } from '../../Global/global-help-modal/global-help-modal.page';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';


@Component({
	selector: "app-your-profile",
	templateUrl: "./your-profile.page.html",
	styleUrls: ["./your-profile.page.scss"],
})
export class YourProfilePage implements OnInit {
	form: FormGroup;
	firstName: string;
	lastName: string;
	emailAddress: string;
	mobileNumber: string;

	croppedImagepath = "";

	platformHeight: number;

	mobileNumberFocused: boolean = false;
	emailAddressFocused: boolean = false;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private profileService: YourProfileService,
		private router: Router,
		private alertController: AlertController,
		private actionSheetController: ActionSheetController,
		private camera: Camera,
		private platform: Platform
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
				updateOn: "blur",
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
		
		// this.form.reset();

		this.presentAlert();
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: GlobalHelpModalPage,
			componentProps: {
				originURL: this.router.url,
				sectionTitle: "Your Profile",
				questions: this.faqService.getYourProfileQuestions(),
				answers: this.faqService.getYourProfileAnswers(),
			},
		});
		return await modal.present();
	}

	async presentAlert() {
		const alert = await this.alertController.create({
			header: 'Your Profile',
			message: 'Confirm the spelling of your name, email address, and your phone number. Then, upload an action shot or selfie. It really helps response rates!',
			buttons: ['OK']
		});
		return await alert.present();
	}

	onNext(form: NgForm) {
		console.log(form)
		this.router.navigateByUrl("/script/add-your-fans-one")
	}

	// onImagePicked(imageData: string | File) {
	// 	let imageFile;
	// 	if (typeof imageData === "string") {
	// 		try {
	// 			imageFile = base64toBlob(
	// 				imageData.replace("data:image/jpeg;base64,", ""),
	// 				"image/jpeg"
	// 			);
	// 		} catch (error) {
	// 			console.log(error);
	// 			return;
	// 		}
	// 	} else {
	// 		imageFile = imageData;
	// 	}
	// 	this.form.patchValue({ image: imageFile });
	// }

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

	toggleMobileNumberFocus() {
		this.mobileNumberFocused = true;
		this.emailAddressFocused = false;
	}

	toggleEmailFocus() {
		this.mobileNumberFocused = false;
		this.emailAddressFocused = true;
	}


}




// function base64toBlob(base64Data, contentType) {
// 	contentType = contentType || "";
// 	const sliceSize = 1024;
// 	const byteCharacters = window.atob(base64Data);
// 	const bytesLength = byteCharacters.length;
// 	const slicesCount = Math.ceil(bytesLength / sliceSize);
// 	const byteArrays = new Array(slicesCount);

// 	for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
// 		const begin = sliceIndex * sliceSize;
// 		const end = Math.min(begin + sliceSize, bytesLength);

// 		const bytes = new Array(end - begin);
// 		for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
// 			bytes[i] = byteCharacters[offset].charCodeAt(0);
// 		}
// 		byteArrays[sliceIndex] = new Uint8Array(bytes);
// 	}
// 	return new Blob(byteArrays, { type: contentType });
// }