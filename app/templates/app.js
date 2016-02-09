import {Application} from './modules/application/application.controller.js';


App.onLaunch = (options) => {

	// user 'BASEURL' for example for image paths
	let BASEURL = options.BASEURL;

	app = new Application(BASEURL);
	app.run();

}

App.onResume = (options) => {}

App.onSuspend = (options) => {}

App.onExit = () => {}