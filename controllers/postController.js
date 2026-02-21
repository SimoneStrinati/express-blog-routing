const posts = require("../data/posts")

function index(req, res) {

    res.json(posts);
};


function show (req, res) {
 const risultati = posts.find(post => post.id == req.params.id)
	res.json(risultati);
};

function store (req, res) {
	res.send(`Vuoi creare un nuovo post`);
};

function update (req, res) {
	res.send(`Vuoi modificare totalmente il post con id: ${req.params.id}`);
};

function destroy (req, res) {
	res.send(`Vuoi cancellare il post con id: ${req.params.id}`);
};

const controllers = {
    index,
    show,
    store,
    update,
    destroy
};

module.exports = controllers;

