import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class RelationshipsService {
	constructor() {}

	getRuleOneRelationships() {
		return ["Mother", "Father", "Grandma", "Grandpa"];
	}

	getRuleTwoRelationships() {
		return ["Aunt", "Uncle", "Adult Sibiling", "Adult Cousin"];
	}

	getRuleThreeRelationships() {
		return ["Godparent", "Mr.", "Mrs.", "Ms.", "Friend", "Dr.", "Nurse", 'Other'];
	}

	getRuleFourRelationships() {
		return ["Coach", "Mr.", "Mrs.", "Ms.", "Doctor", "Professor", 'Other'];
	}

	getRuleFiveRelationships() {
		return [
			"Dr.",
			"Nurse",
			"Father",
			"Mr.",
			"Mrs.",
			"Ms.",
			"Friend",
			"Coach",
			"Minister",
			"Reverend",
			"Rabbi",
			"Imam",
			"Other",
		];
	}

	getAllRelationships() {
		return Array.from(
			new Set([
				...this.getRuleOneRelationships(),
				...this.getRuleTwoRelationships(),
				...this.getRuleThreeRelationships(),
				...this.getRuleFourRelationships(),
				...this.getRuleFiveRelationships(),
			])
		);
	}
}
