import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class SalutationServiceService {
	constructor() {}

	getSaluation(relationship, firstName, lastName) {
		if (relationship == "Mother") {
			return "Mom";
		} else if (relationship == "Father") {
			return "Dad";
		} else if (relationship == "Grandma") {
			return "Grandma";
		} else if (relationship == "Grandpa") {
			return "Grandpa";
		} else if (relationship == "Aunt") {
			return "Aunt " + firstName;
		} else if (relationship == "Uncle") {
			return "Uncle " + firstName;
		} else if (relationship == "Adult Cousin") {
			return firstName;
		} else if (relationship == "Adult Sibiling") {
			return firstName;
		} else if (relationship == "Godparent") {
			return firstName;
		} else if (relationship == "Mr.") {
			return "Mr. " + lastName;
		} else if (relationship == "Mrs.") {
			return "Mrs. " + lastName;
		} else if (relationship == "Ms.") {
			return "Ms. " + lastName;
		} else if (relationship == "Friend") {
			return firstName;
		} else if (relationship == "Dr.") {
			return "Dr. " + lastName;
		} else if (relationship == "Nurse") {
			return "Nurse " + lastName;
		} else if (relationship == "Coach") {
			return "Coach " + lastName;
		} else if (relationship == "Doctor") {
			return "Doctor " + lastName;
		} else if (relationship == "Professor") {
			return "Professor " + lastName;
    }
    else if (relationship == "Other") {
			return firstName;
		}
	}
}
