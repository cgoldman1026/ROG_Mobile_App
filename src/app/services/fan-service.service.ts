import { AlertController, ModalController } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take, map, tap, delay, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

interface Fan {
	fanFirstName: string;
	fanLastName: string;
	fanRelationship: string;
	fanSalutation: string;
	fanEmailAddress: string;
	fanMobileNumber: string;
}

@Injectable({
	providedIn: "root",
})
export class FanServiceService {
	private _fanToEdit;
	private _redirectURL: string;

	private _fans = new BehaviorSubject<Fan[]>([
		{
			fanFirstName: "Chase",
			fanLastName: "Goldman",
			fanRelationship: "Father",
			fanSalutation: "Dear Dad",
			fanEmailAddress: "chase@gmail.com",
			fanMobileNumber: "(914) 505-0583",
		},
		{
			fanFirstName: "Jon",
			fanLastName: "Goldman",
			fanRelationship: "Father",
			fanSalutation: "Dear Dad",
			fanEmailAddress: "",
			fanMobileNumber: "(914) 505-0583",
		},
		{
			fanFirstName: "Greg",
			fanLastName: "Patti",
			fanRelationship: "Father",
			fanSalutation: "Dear Dad",
			fanEmailAddress: "",
			fanMobileNumber: "(914) 505-0583",
		},
		{
			fanFirstName: "Shahe",
			fanLastName: "Katch",
			fanRelationship: "Father",
			fanSalutation: "Dear Dad",
			fanEmailAddress: "",
			fanMobileNumber: "(914) 505-0583",
		},
		{
			fanFirstName: "Grux",
			fanLastName: "Goldman",
			fanRelationship: "Father",
			fanSalutation: "Dear Dad",
			fanEmailAddress: "",
			fanMobileNumber: "(914) 505-0583",
		},
	]);

	// private _fans = [
	// 	{
	// 		fanFirstName: "Chase",
	// 		fanLastName: "Goldman",
	// 		fanRelationship: "Father",
	// 		fanSalutation: "Dear Dad",
	// 		fanEmailAddress: "chase@gmail.com",
	// 		fanMobileNumber: "914-505-0583",
	// 	},
	// 	{
	// 		fanFirstName: "Jon",
	// 		fanLastName: "Goldman",
	// 		fanRelationship: "Father",
	// 		fanSalutation: "Dear Dad",
	// 		fanEmailAddress: "",
	// 		fanMobileNumber: "914-505-0583",
	// 	},
	// 	// {
	// 	// 	fanFirstName: "Greg",
	// 	// 	fanLastName: "Goldman",
	// 	// 	fanRelationship: "Father",
	// 	// 	fanSalutation: "Dear Dad",
	// 	// 	fanEmailAddress: "chase@gmail.com",
	// 	// 	fanMobileNumber: "",
	// 	// },
	// 	// {
	// 	// 	fanFirstName: "Grant",
	// 	// 	fanLastName: "Goldman",
	// 	// 	fanRelationship: "Father",
	// 	// 	fanSalutation: "Dear Dad",
	// 	// 	fanEmailAddress: "chase@gmail.com",
	// 	// 	fanMobileNumber: "914-505-0583",
	// 	// },
	// 	// {
	// 	// 	fanFirstName: "Benny",
	// 	// 	fanLastName: "Goldman",
	// 	// 	fanRelationship: "Father",
	// 	// 	fanSalutation: "Dear Dad",
	// 	// 	fanEmailAddress: "",
	// 	// 	fanMobileNumber: "914-505-0583",
	// 	// },
	// 	// {
	// 	// 	fanFirstName: "Sofie",
	// 	// 	fanLastName: "Goldman",
	// 	// 	fanRelationship: "Father",
	// 	// 	fanSalutation: "Dear Dad",
	// 	// 	fanEmailAddress: "chase@gmail.com",
	// 	// 	fanMobileNumber: "",
	// 	// },
	// ];

	constructor(
		private alertController: AlertController,
		private router: Router,
		private modalController: ModalController
	) {
		// Need to get the list of fans from the server
	}

	async addFan(new_fan) {
		// console.log('this._fans before adding new_fan', this._fans)
		let current_fans_array;
		this.fans.subscribe((data) => {
			current_fans_array = data;
		});
		let updated_value;

		let duplicate = current_fans_array.filter((existing_fan) => {
			return (
				existing_fan.fanFirstName === new_fan.fanFirstName &&
				existing_fan.fanLastName === new_fan.fanLastName &&
				(existing_fan.fanMobileNumber === new_fan.fanMobileNumber ||
					existing_fan.fanEmailAddress === new_fan.fanEmailAddress)
			);
		});

		if (duplicate.length <= 0) {
			updated_value = [...current_fans_array, new_fan];
			this._fans.next(updated_value);
			// console.log('this._fans after adding new_fan', this._fans)
			// ALSO NEED TO SEND THE FAN TO THE SERVER HERE
			const alert = await this.alertController.create({
				header: `${new_fan.fanFirstName} ${new_fan.fanLastName} Successfully Added!`,
				message: `
        <p>${new_fan.fanFirstName} ${new_fan.fanLastName} was successfully added to your campaign.</p>
        <p> Can you add more fans?</p>
        `,
				buttons: [
					{
						text: "NO",
						handler: () => {
							this.router.navigateByUrl("/full/your-fans");
						},
					},
					{
						text: "YES",
						role: "cancel",
					},
				],
			});
			return await alert.present();
		} else {
			const alert = await this.alertController.create({
				header: "Fan Already Exists!",
				message: `
        <p>You've already added ${new_fan.fanFirstName} ${new_fan.fanLastName} to your campaign.</p>
        <p>Please add a new fan.</p>
        `,
				buttons: [
					{
						text: "Okay",
						role: "cancel",
					},
				],
			});
			return await alert.present();
		}
	}

	editFanInitial(edit_fan, url) {
		this._fanToEdit = edit_fan;
		this._redirectURL = url
		this.router.navigateByUrl("/full/edit-fan");
	}

	async editFan(edited_fan, spliceIndex) {
		let current_fans_array;
		this.fans.subscribe((data) => {
			current_fans_array = data;
		});
		let updated_value;

		let duplicate = current_fans_array.filter((existing_fan) => {
			return (
				existing_fan.fanFirstName === edited_fan.fanFirstName &&
				existing_fan.fanLastName === edited_fan.fanLastName &&
				(existing_fan.fanMobileNumber === edited_fan.fanMobileNumber ||
					existing_fan.fanEmailAddress === edited_fan.fanEmailAddress)
			);
		});

		if (duplicate.length <= 0) {
			current_fans_array.splice(spliceIndex, 0, edited_fan)
			this._fans.next(current_fans_array)
			// this._fans.next(updated_value);
			// console.log('this._fans after adding new_fan', this._fans)
			// ALSO NEED TO SEND THE FAN TO THE SERVER HERE
			const alert = await this.alertController.create({
				header: `Saving Changes!`,
				message: `
        <p>Your changes to ${edited_fan.fanFirstName} ${edited_fan.fanLastName}'s information have been saved to your campaign.</p>
        `,
				buttons: [
					{
						text: "Okay",
						handler: () => {
							this.router.navigateByUrl(this.redirectURL);
						},
					},
				],
			});
			return await alert.present();
		} else {
			const alert = await this.alertController.create({
				header: "Fan Already Exists!",
				message: `
        <p>You've already added ${edited_fan.fanFirstName} ${edited_fan.fanLastName} to your campaign.</p>
        <p>Please add a new fan.</p>
        `,
				buttons: [
					{
						text: "Okay",
						role: "cancel",
						handler: () => {
							this.router.navigateByUrl(this.redirectURL);
						},
					},
				],
			});
			return await alert.present();
		}
	}

	async deleteFan(delete_fan, throwAlert) {
		if (throwAlert) {
			const alert = await this.alertController.create({
				header: "Delete?",
				message: `Are you sure you want to delete ${delete_fan.fanFirstName} ${delete_fan.fanLastName} from your campaign?`,
				buttons: [
					{
						text: "YES",
						handler: () => {
							let current_fans_array;
							// Load the data from the behavior subject to get a current snapshot
							this.fans.subscribe((data) => {
								// Make a copy of the data to avoid any instance issues
								current_fans_array = [...data];
							});

							// Loop through the data to find the current fan to delete
							current_fans_array.forEach((exiting_fan, index) => {
								if (exiting_fan === delete_fan) {
									current_fans_array.splice(index, 1);
								}
							});

							// Update the new fans list
							this.fans.next(current_fans_array);
						},
					},
					{
						text: "NO",
						role: "cancel",
					},
				],
			});
			return await alert.present();
			// Need to implement this function still
		} else {
			let current_fans_array;
			// Load the data from the behavior subject to get a current snapshot
			this.fans.subscribe((data) => {
				// Make a copy of the data to avoid any instance issues
				current_fans_array = [...data];
			});

			// Loop through the data to find the current fan to delete
			current_fans_array.forEach((exiting_fan, index) => {
				if (exiting_fan === delete_fan) {
					current_fans_array.splice(index, 1);
				}
			});

			// Update the new fans list
			this.fans.next(current_fans_array);
		}
	}

	get fans() {
		return this._fans;
	}

	get fanToEdit() {
		return this._fanToEdit;
	}

	get redirectURL() {
		return this._redirectURL;
	}
}
