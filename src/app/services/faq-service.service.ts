import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class FaqServiceService {
	constructor() {}

	// BEGIN QUESTIONS AND ANSWERS FOR THE SCRIPT

	getCampaignPinNumberQuestions() {
		let questions = {
			question1: "What is the Campaign Pin Number for?",
			question2: "I don't have my PIN. Now what?",
			question3: 'Do I use the campaign PIN every time I log into our campaign?',
			question4: "How do I log in after I create my personal account?",
			question5: "What does the campaign PIN look like?",
		};
		return Object.values(questions);
	}

	getCampaignPinNumberAnswers() {
		let answers = {
			answer1:
				"By entering the correct PIN number, we can link you into the correct campaign on our platform.",
			answer2:
				"Your campaign organizer has an instruction sheet with your PIN number. Reach out to them or click below to contact us and we'll provide it to you.",
			anwer3:
				"No. You only need it the first time you Log In to create a personal account for your team or group campaign.",
			answer4:
				"Opening the application will take you to a login page. Enter your email and password to login to your personal account.",
			answer5:
				"Your campaign PIN is a nine digit number. Your campaign organizer has an instruction sheet with your PIN number.",
		};
		return Object.values(answers);
	}

	getConfirmCampaignQuestions() {
		let questions = {
			question1: "Why do I need to confirm my campaign?",
			question2: "What if the wrong campaign is being displayed?",
			question3: `I don't have my Campaign PIN. Now what?`,
			question4: "ADD MORE QUESTIONS IF NEEDED",
			question5: "ADD MORE QUESTIONS IF NEEDED",
			question6: "ADD MORE QUESTIONS IF NEEDED",
		};
		return Object.values(questions);
	}

	getConfirmCampaignAnswers() {
		let answers = {
			answer1:
				"We just need to make sure you are creating your personal account in the correct campaign.",
			answer2:
				"Don’t click the Confirm Campaign button! Click the Not My Campaign text link and enter a correct Campaign PIN.",
			anwer3:
				"Your campaign organizer has an instruction sheet with your PIN number. Reach out to them or click below to contact us and we'll provide it to you.",
			answer4:
				"ADD ANOTHER ANSWER HERE IF NEEDED",
			answer5:
				"ADD ANOTHER ANSWER HERE IF NEEDED",
			answer6:
				"ADD ANOTHER ANSWER HERE IF NEEDED",
		};
		return Object.values(answers);
	}

	getCreateYourAccountQuestions() {
		let questions = {
			question1: "Why do I need to create an account?",
			question2: "What will I need to create my account?",
			question3: 'Why do I have to enter an email address and a mobile number?',
			question4: "What happens to the info I enter to create my account?",
			question5: "ADD ANOTHER QUESTION HERE IF NEEDED",
			question6: "ADD ANOTHER QUESTION HERE IF NEEDED",
		};
		return Object.values(questions);
	}

	getCreateYourAccountAnswers() {
		let answers = {
			answer1:
				"You need to create a personal account in order to participate in your team or group campaign.",
			answer2:
				"Just enter your name, email address and mobile number. Then set your own password.",
			anwer3:
				"So we can send you alerts when your fans contribute and so your campaign organizer can connect with you through the campaign.",
			answer4:
				"It is not shared with any third party ever. It is used only to execute the team or group campaign you are participating in.",
			answer5:
				"ADD ANOTHER ANSWER HERE IF NEEDED",
			answer6:
				"ADD ANOTHER ANSWER HERE IF NEEDED",
		};
		return Object.values(answers);
	}

	getTutorialQuestions() {
		let questionArray = [
			"What are the next steps to creating my account?",
			"Why should I add a picture?",
			'Who are my "Fans"?',
			"Do I need to write any of the messaging?",
			"What happens to my fans' contact information?",
			"After a fan contributes, will the messaging stop?",
		];

		return questionArray;
	}

	getTutorialAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list.",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getPickYourRewardQuestions() {
		let questionArray = [
			"What is the participation reward?",
			"How do I know I’ve earned a reward?",
			'Will my campaign organizer know I’ve earned a reward?',
			"How do I redeem my reward after earning it?",
			"Can I earn more than one reward?",
			"Why are there no participation rewards for me to choose from?",
		];

		return questionArray;
	}

	getPickYourRewardAnswers() {
		let answers = {
			answer1:
				"A reward you earn by adding the right number and quality of fans into your team or group campaign.",
			answer2:
				"When you are done entering your fans, you will have access to a page to monitor your reward progress.",
			anwer3:
				"Yes. As soon as you qualify for your reward, your campaign organizer will be alerted.",
			answer4:
				"Your campaign organizer will let you know.",
			answer5:
				"No. You can only earn one participation reward per campaign.",
			answer6:
				"Your campaign organizer hasn’t selected rewards for team or group members yet. You’ll be alerted when they are available.",
		};
		return Object.values(answers);
	}

	getYourProfileQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getYourProfileAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getAddYourFansQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getAddYourFansAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getShareCampaignQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getShareCampaignAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	// END QUESTIONS AND ANSWERS FOR THE SCRIPT

	// BEGIN QUESTIONS AND ANSWERS FOR THE FULL APP

	getLoggingInQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getLoggingInAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getYourFansQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getYourFansAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getYourScorecardQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getYourScorecardAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getRewardsQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getRewardsAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	// END QUESTIONS AND ANSWERS FOR THE FULL APP

	getPrivacyQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getPrivacyAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getOtherQuestions() {
		let questions = {
			question1: "What are the next steps to creating my account?",
			question2: "Why should I add a picture?",
			question3: 'Who are my "Fans"?',
			question4: "Do I need to write any of the messaging?",
			question5: "What happens to my fans' contact information?",
			question6: "After a fan contributes, will the messaging stop?",
		};
		return Object.values(questions);
	}

	getOtherAnswers() {
		let answers = {
			answer1:
				"Just upload a picture or selfie, add fans who know and care about you, and share our campaign on social media.",
			answer2:
				"Pictures personalize all of the messaging sent to your fans and really improve response rates.",
			anwer3:
				"Adults from your personal life who know and care about you. We'll give you plenty of suggestions so it's easy to create a great list",
			answer4:
				"No. Everything has already been written and approved by your campaign organizer. All you need to do is add your fans to your campaign.",
			answer5:
				"It is used solely for the execution of the fundraising campaign. Nothing is shared with a third party. Ever.",
			answer6:
				"Yes. As soon as a fan contributes, they'll stop recieving messages about making a gift.",
		};
		return Object.values(answers);
	}

	getMaterials() {
		return [
			// {
			// 	category: "Campaign PIN Number",
			// 	questions: this.helpService.getCampaignPinNumberQuestions(),
			// 	answers: this.helpService.getCampaignPinNumberAnswers(),
			// },
			{
				category: "Logging In",
				questions: this.getLoggingInQuestions(),
				answers: this.getLoggingInAnswers(),
			},
			{
				category: "Your Profile",
				questions: this.getYourProfileQuestions(),
				answers: this.getYourProfileAnswers(),
			},
			{
				category: "Share Campaign",
				questions: this.getShareCampaignQuestions(),
				answers: this.getShareCampaignAnswers(),
			},
			{
				category: "Your Fans",
				questions: this.getYourFansQuestions(),
				answers: this.getYourFansAnswers(),
			},
			{
				category: "Your Scorecard",
				questions: this.getYourScorecardQuestions(),
				answers: this.getYourScorecardAnswers(),
			},
			{
				category: "Rewards",
				questions: this.getRewardsQuestions(),
				answers: this.getRewardsAnswers(),
			},
			{
				category: "Privacy",
				questions: this.getPrivacyQuestions(),
				answers: this.getPrivacyAnswers(),
			},
			{
				category: "Other",
				questions: this.getOtherQuestions(),
				answers: this.getOtherAnswers(),
			},
		];
	}
}
