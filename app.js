var config = require("./config.json");
var log = require("custom-logger").config({ level: 0 });


var express 	 = require("express");
var app     	 = express();
var bodyParser = require("body-parser");
app.use(bodyParser());

var repo   = require("./repo").init(config, log);
var router = require("./router").init(express, repo, log);
app.use("/api", router);

app.listen(config.service_port);
log.info("TwitterBot Service started on port " + config.service_port);

