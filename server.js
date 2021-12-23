//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
//const app = require('http');
const app = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//=============================================================================
// Middleware
//=============================================================================
app.use(cors());
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));
//=============================================================================
// ROUTES
//=============================================================================

// Redirect
app.get('/', (req, res) => {
	res.redirect('/Articles');
});

//  Routes
const Articles = require('./models/article.js')
const articleRoutes = require('./controllers/article.js');
const { Router } = require('express');
app.use('/Articles', articleRoutes);
//=============================================================================
// START SERVER
//=============================================================================

// app.listen(PORT, () => {
// 	console.log(`✅  app listening on port: ${PORT}`);
// });


module.exports = Router;

