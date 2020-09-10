import { DonationServiceService } from "./../../../services/donation-service.service";
import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-donation-details",
	templateUrl: "./donation-details.page.html",
	styleUrls: ["./donation-details.page.scss"],
})
export class DonationDetailsPage implements OnInit {
	donationsSub: Subscription;
	donations;

	constructor(private donationService: DonationServiceService) {}

	ngOnInit() {
		this.donationsSub = this.donationService.donations.subscribe((data) => {
			this.donations = data;
		});
		console.log("donations before sorting ", this.donations);
		this.donations = this.donations.sort((val1, val2) => {
			let val1Date = +new Date(
				val1.donorDate.split("/")[2],
				val1.donorDate.split("/")[0] - 1,
				val1.donorDate.split("/")[1]
			);
			let val2Date = +new Date(
				val2.donorDate.split("/")[2],
				val2.donorDate.split("/")[0] - 1,
				val2.donorDate.split("/")[1]
      );
  
			return val2Date - val1Date;
		});
		console.log("donations after sorting ", this.donations);
	}
}
