exports.init = function(router, config, log) {
	var status = require("./resources/status.js").init(config, log);
	var post = require("./resources/post.js").init(config, log);
	var poster = require("./resources/poster.js").init(config, log);

	router.get("/", function(req, res) {
		res.json({ message: "Welcome to TwitterBot Service v0.1" });
	});

	router.get("/statuses", status.findAll);
	router.post("/statuses", status.create);
	router.get("/statuses/:id", status.findById);

	router.get("/posts", post.findAll);
	router.post("/posts", post.create);
	router.get("/posts/:id", post.findById);

	return router;
}
