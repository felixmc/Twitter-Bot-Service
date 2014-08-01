exports.init = function(config, log) {

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

