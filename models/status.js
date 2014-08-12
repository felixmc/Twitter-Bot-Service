module.exports = function(Model) {
	return {
		findByAuthor: function(author, success, error) {
			this.find({ author: author }, success, error);
		}
	}	
}
