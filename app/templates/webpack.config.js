'use strict';
var webpack = require('webpack'),
	path    = require('path');

var APP  = __dirname;

module.exports = {
	entry: {
		app: ['./app/app.js']
	},
	output: {
		path: APP + '/dist/',
		filename: "bundle.js"
	},
	module: {
		noParse: [],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules|bower_components|styles/,
				loader: 'babel?presets[]=es2015'
			}
		]
	},
	resolve: {
		modulesDirectories: [
			'node_modules'
		]
	}
};