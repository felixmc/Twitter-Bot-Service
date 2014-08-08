exports.init = function(router, config, log) {
	var model  = require("./model")(config, log);
	var status = require("./resources/status.js")(model);
	//var post = require("./resources/post.js")(model);
	//var poster = require("./resources/poster.js")(model);

	router.get("/", function(req, res) {
		res.json({ message: "Welcome to TwitterBot Service v0.1" });
	});

	router.get("/statuses", status.findAll);
	router.post("/statuses", status.create);
	router.get("/statuses/:id", status.findById);

	//router.get("/posts", post.findAll);
	//router.post("/posts", post.create);
	//router.get("/posts/:id", post.findById);

	return router;

