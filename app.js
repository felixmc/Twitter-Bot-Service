var config = require("./config.json");
var log = require("custom-logger").config({ level: 0 });

var repo = require("./repo").init(config, log);

log.info("app started");

var manyToMany = function(prop, vals) {
	var obj = {};
  obj[prop] = { $elemMatch: { $in: vals } };
	return obj;
};

repo.getStatus(repo.arrayIntersectQuery("tags", ["at"]), function(err, result) {
	if (err) { log.error(err);  }
	else { log.info("found: " + JSON.stringify(result)); }
});
