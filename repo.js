exports.init = function(config, log) {
	var mongo = require("mongodb").MongoClient;
	var mongoHost = "mongodb://" + config.database_host + ":27017/" + config.database_name;

	log.info("mongo module init");

	var connect = function(col, callback) {
		mongo.connect(mongoHost, function(err, db) {
			if (err) { log.error(err); }
			else { callback(db, db.collection(col)); }
		});
	};

	return {
		arrayIntersectQuery: function(prop, vals) {
			var obj = {};
			obj[prop] = { $elemMatch: { $in: vals } };	
			return obj;
		},
		createPost: function(obj, callback) {
			connect("post", function(db, col) {
				col.insert(obj, { w: 1 }, callback);
			});
		},
		getPost: function(query, callback) {
			connect("post", function(db, col) {
				col.find(query).toArray(callback);
			});
		},
		createStatus: function(obj, callback) {
			connect("status", function(db, col) {
				col.insert(obj, { w: 1 }, callback);
			});
		},
		getStatus: function(query, callback) {
			connect("status", function(db, col) {
				col.find(query).toArray(callback);
			});
		}
	};
};

