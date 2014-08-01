var config = require("./config.json");
var log    = require("custom-logger").config({ level: 0 });

var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
app.use(bodyParser());

var repo   = require("./repo").init(config, log);

var service = require("./service");
var router = express.Router();

// log all requests
router.use(function(req, res, next) {
	log.info("request to " + req.path + " from " + req.ip);
	next();
});

app.use("/api", service.init(router));

app.listen(config.service_port);
log.info("TwitterBot Service started on port " + config.service_port);

