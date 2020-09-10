import { EditFanPage } from './../edit-fan/edit-fan.page';
import { FanServiceService } from "../../services/fan-service.service";
import { ModalController, AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-fans-modal",
	templateUrl: "./fans-modal.page.html",
	styleUrls: ["./fans-modal.page.scss"],
})
export class FansModalPage implements OnInit {
	fans;

	constructor(
		private modalController: ModalController,
		private fansService: FanServiceService,
		private alertController: AlertController
	) {}

	ngOnInit() {
		this.fans = this.fansService.fans;
		console.log(this.fans);
	}

	dismiss() {
		this.modalController.dismiss({
			dismissed: true,
		});
	}

	editFan(fan) {
		this.presentEditModal(fan);
	}

	deleteFan(fan) {
		this.presentDeleteAlert(fan)
	}

	async presentDeleteAlert(fan) {
		const alert = await this.alertController.create({
			header: "Hold On!",
			message: `Are you sure you want to delete ${fan.fanFirstName} ${fan.fanLastName} from your campaign? This action cannot be undone.`,
			buttons: [
				{
					text: "CANCEL",
					role: "cancel",
				},
				{
					text: "YES",
					handler: () => {
						console.log(
							"Need to figure out the logic to delete this fan from the database."
						);
						this.updateFanList(fan)
					},
				},
			],
		});
		return await alert.present();
	}

	async presentEditModal(fan) {
		const modal = await this.modalController.create({
			component: EditFanPage,
			componentProps: {
				fanFirstName: fan.fanFirstName,
				fanLastName: fan.fanLastName,
				fanRelationship: fan.fanRelationship,
				fanMessageStarter: fan.fanMessageStarter,
				fanEmailAddress: fan.fanEmailAddress,
				fanMobileNumber: fan.fanMobileNumber,
			},
		});
		return await modal.present();
	}

	updateFanList(fanDelete) {
		this.fans = this.fans.filter(fan => {
			return fan !== fanDelete;
		})
	}
}
