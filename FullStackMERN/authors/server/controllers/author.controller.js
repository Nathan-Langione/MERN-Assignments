const Author = require("../models/author.model");

const createAuthor = (req, res) => {
    const { name } = request.body;
    Author.create({
        title: title
    })
        .then((newAuthor) => res.json(newAuthor))
        .catch(err => response.status(400).json(err))
};

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => console.log(err));
};

const getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then((queriedAuthor) => res.json(queriedAuthor))
        .catch((err) => console.log(err));
};

const updateAuthor = (req, res) => {
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        // this will make sure validations are still run
        runValidators: true,
    })
        .then((updatedAuthor) => res.json(updatedAuthor))
        .catch((err) => res.status(400).json(err));
};

const deleteAuthor = (req, res) => {
    // find author by id and delete
    Author.deleteOne({ _id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    updateAuthor,
    deleteAuthor,
};