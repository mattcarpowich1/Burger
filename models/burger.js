const ORM = require('../config/orm.js');

module.exports = {
	// returns a promise with all of the 
	// records passed in as a parameter
	getBurgers: () => {
		return ORM.selectAll();
	},

	addBurger: name => {
		return ORM.insertOne(name);
	},

	devour: id => {
		return ORM.updateOne(id);
	},

	remove: id => {
		return ORM.deleteOne(id);
	}

}
