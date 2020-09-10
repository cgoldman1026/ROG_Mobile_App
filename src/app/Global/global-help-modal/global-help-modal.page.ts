import { FaqServiceService } from "./../../services/faq-service.service";
import { ScrollVanishDirective } from "../scroll-vanish.directive";
import { ContactUsPage } from "../contact-us/contact-us/contact-us.page";
import { ModalController } from "@ionic/angular";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
// import {ScrollVanishDirective}

@Component({
	selector: "app-global-help-modal",
	templateUrl: "./global-help-modal.page.html",
	styleUrls: ["./global-help-modal.page.scss"],
})
export class GlobalHelpModalPage implements OnInit {
	@Input() originURL: string;
	@Input() sectionTitle: string;
	@Input() questions;
	@Input() answers;

	constructor(
		private modalController: ModalController,
		private faqService: FaqServiceService,
		private router: Router
	) {}

	ngOnInit() {
		// this.contactHandler();
		// this.originURL = this.originURL.replace('/full', '').replace('/script', '');
		console.log(this.originURL);
	}

	contactHandler() {
		console.log('FROM WITHIN THE CONTACT HANDLER')
		this.dismiss();
		this.router.navigateByUrl(`/contact-us${this.originURL}`);
	}

	dismiss() {
		console.log('FROM WITHIN DISMISS');
		this.modalController.dismiss({
			dismissed: true,
		});
	}


}
