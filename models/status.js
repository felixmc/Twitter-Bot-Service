exports.init = function(config, log) {
	var db = require("../db").init(config, log);

	var collection = function(callback) { db.connect(function(db) { callback(db, db.collection("status"));  }); };

	var response = function(success, error) {
		return function(err, data) {
			if (err) { log.error(err); }
			else { success(data); }
		}
	};

	var parseStatus = function(obj, success) {
		// parse / escape logic
		var parsed = {};
		var error = false;

		if (error) {
			log.error("Error while parsing status model: " + obj);
		} else {
			success(parsed);
		}
	};

	return {
		findAll: function(success, error)	{
			collection(function(db, col) {
				col.find({}, {}, response(success, error));
			});
		},
		findById: function(id, success, error) {
			collection(function(db, col) {
				col.findById(id, response(success, error));
			});
		},
		create: function(data, success, error) {
			parseStatus(obj, function(status) {
				collection(function(db, col) {
					col.insert(obj, response(success, error));
				});
			});
		}
	};
}
