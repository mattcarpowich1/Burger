const express = require('express');
const { 
	getBurgers, 
	addBurger, 
	devour,
	remove 
} = require('../models/burger.js');
const router = express.Router();


router.get('/', (req, res) => {
	getBurgers()
		.then( burgers => {
			res.render('index', { burgers: burgers });
		})
		.catch( err => {
			throw err;
		});
});

router.post('/add', (req, res) => {
	addBurger(req.body.name)
	.then( () => {
		res.end();
	})
	.catch( err => {
		throw err;
	})
});

router.put('/devour', (req, res) => {
	let id = req.body.id;
	devour(id)
		.then( () => {
			res.end();
		})
		.catch( err => {
			throw err;
		});
});

router.delete('/remove', (req, res) => {
	let id = req.body.id;
	remove(id)
		.then( () => {
			res.end();
		})
		.catch( err => {
			throw err;
		})
});


module.exports = router;