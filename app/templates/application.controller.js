let loader = require('../../common/loader.template.js').loader;

class Application {

	constructor(options) {
		this.parser = new DOMParser();
		this.options = options;
	}

	run() {
		this.showLoader();
	}

	showLoader() {
		let loadScreen = this.parser.parseFromString(loader(this.options), "application/xml");
		navigationDocument.presentModal(loadScreen);
	}
}

export {Application};