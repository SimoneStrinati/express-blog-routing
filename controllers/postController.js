const posts = require("../data/posts")

function index(req, res) {

    res.json(posts);
};


function show(req, res) {
    const id = Number(req.params.id);

    const risultati = posts.find(post => post.id == id)
    res.json(risultati);
};

function store(req, res) {
    res.send(`Vuoi creare un nuovo post`);
};

function update(req, res) {
    res.send(`Vuoi modificare totalmente il post con id: ${req.params.id}`);
};

function destroy(req, res) {

    const id = Number(req.params.id);

    const risultati = posts.find(post => post.id == id);

    posts.splice(posts.indexOf(risultati), 1);

    console.log(`Hai eliminato il post: ${id}`, posts);

    res.sendStatus(204);
};

const controllers = {
    index,
    show,
    store,
    update,
    destroy
};

module.exports = controllers;

