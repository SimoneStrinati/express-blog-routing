const posts = require("../data/posts")

function index(req, res) {

    let risultati = posts

    if (req.query.tags) {

        risultati = posts.filter(post => post.tags.find(tag => tag.toLowerCase() === req.query.tags.toLowerCase()));
    }

    res.json(risultati);
};


function show(req, res) {
    const id = Number(req.params.id);

    const risultato = posts.find(post => post.id == id)

    if (!risultato) {
        res.status(404).res.json({ error: "Not Found", message: "Post non trovato" });
    }

    res.json(risultato);
};

function store(req, res) {
    // console.log(req.body);

    const newPost = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    res.status(201).json(newPost)
};

function update(req, res) {

    const id = Number(req.params.id);

    const risultato = posts.find(post => post.id == id)

    if (!risultato) {
        res.status(404).res.json({ error: "Not Found", message: "Post non trovato" });
    }

    risultato.title = req.body.title;
    risultato.content = req.body.content;
    risultato.image = req.body.image;
    risultato.tags = req.body.tags

    res.json(risultato);
    
    
};

function destroy(req, res) {

    const id = Number(req.params.id);

    const risultato = posts.find(post => post.id == id);

    posts.splice(posts.indexOf(risultato), 1);

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

