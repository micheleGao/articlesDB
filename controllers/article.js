const express = require('express');
const articleRoutes = express.Router();
const Articles = require('../models/article.js');
// const seedData = require('../db/seed');

//seeding --commented out so i dont reseed.
// articleRoutes.get('/seed', async (req,res) => {
//     try {
//       const newData = Articles.create(drinkData);
//       console.log(newData)
//     } catch(err) {
//       console.log(err)
//     }
// 	db.close();
// })

// Index
articleRoutes.get('/', async (req, res) => {
	try {
		const allArticles = await Articles.find();
		res.json(allArticles);
	} catch (err) {
		console.log(err);
	}
});

// Create
articleRoutes.post('/', (req, res) => {
	Articles.create(req.body, (err, recipe) => {
		try{
			const createdData = Articles.create(Articles);
			res.send(createdData)
		}catch(err){
			if (err) {
				res.sendStatus(400);
			} else {
				res.status(201).json(recipe);
			}
		}
		// if (err) {
		// 	res.sendStatus(400);
		// } else {
		// 	res.status(201).json(recipe);
		// }
	});
});

// Show
articleRoutes.get('/:id', async (req, res) => {
	try {
		const currentArticles = await Articles.findById(req.params.id, (err, recipe) => {
			if (!recipe) {
				res.sendStatus(404);
			} else {
				res.json(recipe);
			}
		});
	} catch (err) {
		console.log(err);
	}
});

// Update
articleRoutes.put('/:id', async (req, res) => {
	try {
		const updatedArticlesData = await Articles.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
			(err, recipe) => {
				if (err) {
					console.log(err);
				} else if (!recipe) {
					res.sendStatus(404);
				} else {
					res.json(recipe);
				}
			}
		);
	} catch (err) {
		console.log(err);
	}
});

// Delete
articleRoutes.delete('/:id', async (req, res) => {
	try {
		const deletedArticles = await Articles.findByIdAndDelete(
			req.params.id,
			(err, recipe) => {
				if (err) {
					console.log(err);
				} else if (!recipe) {
					res.sendStatus(404);
				} else {
					res.sendStatus(204);
				}
			}
		);
	} catch (err) {
		console.log(err);
	}
});

module.exports = articleRoutes;