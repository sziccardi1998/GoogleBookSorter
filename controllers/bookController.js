// define all dependencies
const db = require("../models");

// define methods for bookController
module.exports = {
    // find book
    db.Book.find(req.query)
};