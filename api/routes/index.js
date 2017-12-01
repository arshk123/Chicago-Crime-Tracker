module.exports = function (app, router) {
	app.use('/api', require('./home.js')(router));
	app.use('/crimes', require('./crimes.js')(router));
};

