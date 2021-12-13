const mongoose = require('../db/connection')

const articleSchema = new mongoose.Schema(
    {

    },
    {timestamps : true}
)

const articles = mongoose.model('Articles', articleSchema)

module.exports = articles;