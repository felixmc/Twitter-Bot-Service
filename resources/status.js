exports.init = function(config, log) {
	var statuses = require("../models/status").init(config, log);

	return {
		findAll: function(req, res) {
			statuses.findAll(function(data) {
				res.json(data);
			}, function() {
				res.send(500);
			});
		},
		findById: function(req, res) {
			statuses.findById(req.params.id, function(data) {
				res.json(data);
			}, function() {
				res.send(404);
			});
		},
		create: function(req, rconfes) {
	
		}
	}
};
