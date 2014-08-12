var config     = require("./config.json");
var log        = require("custom-logger").config({ level: 0 });
var express    = require("express");
var app        = express();
var mongoRest  = require("mango-rest").init(config);

// log all requests
app.use(function(req, res, next) {
	log.info("request to " + req.path + " from " + req.ip);
	next();
});

app.use("/api", mongoRest(config.models));

app.listen(config.service_port);
log.info("TwitterBot Service started on port " + config.service_port);
