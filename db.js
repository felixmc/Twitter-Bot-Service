exports.init = function(config, log) {
	var mongoHost = "mongodb://" + config.database_host + ":27017/" + config.database_name;
	var mongo = require("mongodb").MongoClient;

	return {
		connect: function(callback) {
			mongo.connect(mongoHost, function(err, db) {
				if (err) { log.error(err); }
				else { callback(db); }
			});
		}
	}

};
