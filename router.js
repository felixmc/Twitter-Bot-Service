exports.init = function(express, repo, log) {
	var router = express.Router();

	router.use(function(req, res, next) {
		log.info("request to " + req.path + " from " + req.ip);

		next();
	});

	router.get("/", function(req, res) {
		res.json({ message: "Welcome to TwitterBot Service v0.1" });
	});


	/*router.get("/status", function(req, res)) {
		repo.getStatus(repo.arrayIntersectQuery("tags", ["at"]), function(err, result) {
			if (err) { log.error(err);  }
			else { log.info("found: " + JSON.stringify(result)); }
		});
	}*/

	return router;
}
