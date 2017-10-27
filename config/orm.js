let connection = require('./connection.js');

connection.connect(err => {
	if (err) {
		throw err;
	}
});

function selectAll() {
	let query = "SELECT * FROM burgers";
	return new Promise((resolve, reject) => {
		connection.query(query, (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
}

function insertOne(name) {
	let query = "INSERT INTO burgers " +
							"(burger_name) " +
							"VALUES ( '" + name + "' );";
	return new Promise((resolve, reject) => {
		connection.query(query, (err) => {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
}

function updateOne(id) {
	let query = "UPDATE burgers " + 
							"SET devoured = 1 " +
							"WHERE id = " + id + ";";
	return new Promise((resolve, reject) => {
		connection.query(query, err => {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
}

function deleteOne(id) {
	let query = "DELETE FROM burgers " +
							"WHERE id = " + id + ";";
	return new Promise((resolve, reject) => {
		connection.query(query, err=> {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
}

module.exports = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne,
	deleteOne: deleteOne,
};