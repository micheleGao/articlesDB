const mongoose = require('../db/connection')

const Articleschema = new mongoose.Schema(
	{
		title: String,
		body: String,
		author: String,
		likes: { type: Number, default: 0 },
		sponsored: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const Articles = mongoose.model('Articles', Articleschema)

module.exports = Articles;