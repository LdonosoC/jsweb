function root (req, res) {
	res.render('hello.twig', {
		name: 'perry',
	});
};

module.exports = {
	root: root
};