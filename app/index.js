'use strict';
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

	prompting: function () {
		var done = this.async();

		this.prompt({
			type: 'input',
			name: 'name',
			message: 'Your project name',
			default: this.appname
		}, function (answers) {
			this.log(answers.name);
			done();
		}.bind(this));
	},

	writing: {

		gulpfile: function () {
			this.fs.copyTpl(
				this.templatePath('gulpfile.js'),
				this.destinationPath('gulpfile.js')
			);
		},

		webpack: function () {
			this.fs.copyTpl(
				this.templatePath('webpack.config.js'),
				this.destinationPath('webpack.config.js')
			);
		},

		packageJSON: function () {
			this.fs.copyTpl(
				this.templatePath('_package.json'),
				this.destinationPath('package.json'),
				{ appname : this.appname }
			);
		},

		git: function () {
			this.fs.copy(
				this.templatePath('gitignore'),
				this.destinationPath('.gitignore'));
		},

		scripts: function () {
			this.fs.copy(
				this.templatePath('app.js'),
				this.destinationPath('app/app.js'));
			this.fs.copy(
				this.templatePath('apiService.js'),
				this.destinationPath('app/services/apiService.js'));
			this.fs.copy(
				this.templatePath('error.template.js'),
				this.destinationPath('app/common/error.template.js'));
			this.fs.copy(
				this.templatePath('player.controller.js'),
				this.destinationPath('app/common/player.controller.js'));
			this.fs.copy(
				this.templatePath('spinner.template.js'),
				this.destinationPath('app/common/spinner.template.js'));
			this.fs.copy(
				this.templatePath('loader.template.js'),
				this.destinationPath('app/common/loader.template.js'));
			this.fs.copy(
				this.templatePath('application.controller.js'),
				this.destinationPath('app/modules/application/application.controller.js'));
		},

		misc: function () {
			mkdirp('app/assets');
		}

	}

});