const Q = require('q');

exports.apiRequest = (options) => {

	var deferred = Q.defer(),
		req = new XMLHttpRequest();

	req.open(options.method || 'GET', options.url, true);

	// Set request headers if provided.
	for(var i = 0; i < options.headers.length; i++) {
		var key = Object.keys(options.headers[i])[0];
		var val = options.headers[i][key];
		req.setRequestHeader(key, val);
	}

	req.onreadystatechange = function() {
		if(this.readyState != 4) {
			//still loading
		}
		if(this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.response.toString());
			deferred.resolve(res);
		}
		if(this.readyState == 4 && this.status != 200) {
			deferred.reject(this.response);
		}
	};

	req.send(options.data || void 0);

	return deferred.promise;
};