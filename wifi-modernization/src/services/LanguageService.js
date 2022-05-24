export class LanguageService {
	defaultLang = 'en';

	constructor(lang) {
		this.lang = lang;
	}

	getLocalizedText(textVersions) {
		return textVersions[this.lang] ?? textVersions[this.defaultLang];
	}
}