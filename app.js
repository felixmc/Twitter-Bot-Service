var config		= require("./config.json");
var models		= require("./models.json");

var log				= require("custom-logger").config({ level: 0, format: "%timestamp% %padding%[%event%]%message%" });
var express		= require("express");
var app				= express();
var mongoRest	= require("mango-rest").init(config.mongo);

// log all requests
app.use(function(req, res, next) {
	log.debug("request to " + req.path + " from " + req.ip);
	next();
});

app.use("/api", mongoRest(models));

app.listen(config.service.port);
log.info("TwitterBot Service started on port " + config.service.port);
