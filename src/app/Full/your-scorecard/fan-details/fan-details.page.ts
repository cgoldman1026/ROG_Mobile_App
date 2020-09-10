import { FanServiceService } from "./../../../services/fan-service.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
	selector: "app-fan-details",
	templateUrl: "./fan-details.page.html",
	styleUrls: ["./fan-details.page.scss"],
})
export class FanDetailsPage implements OnInit {
	fans;
	private fansSub: Subscription;

	constructor(private fanService: FanServiceService) {}

	ngOnInit() {
		this.fansSub = this.fanService.fans.subscribe((data) => {
			this.fans = data;
		});
	}

	editFan(fan) {
		this.fanService.editFanInitial(fan, '/full/your-scorecard/fan-details');
	}

	deleteFan(fan) {
		this.fanService.deleteFan(fan, true);
	}
}
