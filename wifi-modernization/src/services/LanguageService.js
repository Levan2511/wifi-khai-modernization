export class LanguageService {

	constructor(lang) {
		this.lang = lang;
	}

	getLocalizedText(textVersions) {
		return textVersions[this.lang];
	}
}