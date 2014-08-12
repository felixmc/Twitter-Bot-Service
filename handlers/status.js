module.exports = function(Handler, model) {
	var router = Handler.crud(model);

	router.get("/tag/:tag", function(req, res) {
		model.find({ tags: req.params.tag }, function(data) {
			res.json(data);
		}, Handler.handleError(res));
	});

	router.get("/author/:author", function(req, res) {
		model.findByAuthor(req.params.author, function(data) {
			res.json(data);
		}, Handler.handleError(res));
	});
	
	return router;
}
