const User = require('./users');
const Room = require('./rooms');
const Contracts = require('./contracts');
const Building = require('./buildings');
const Service = require('./services');
const Invoice = require('./invoices');
exports.routerApi = (app) => {
	// default
	app.get('/', (req, res) => {
		return res.send('Welcome to API Gateway version 1.0.0');
	});

	// Router of user

	// get all user
	app.get('/users/getAll', User.getAll);

	// test api
	app.get('/users/thu', (req, res) => {
		return res.send('welcome to API Thu');
	});

	// user create
	app.post('/users/create', User.create);

	// Register
	app.post('/register', User.register);

	// Login
	app.post('/login-user', User.login);

	// get cus by Email
	app.post('/getEmail', User.getEmail);

	// lấy dữ liệu người dùng token
	app.post('/usersData', User.getusersdata);

	// -----------------ROOMS------------------//

	app.post('/rooms/create', Room.create);

	app.get('/rooms/getall', Room.getAll);

	app.get('/rooms/finance', Room.finance);

	app.post('/rooms/update', Room.update);

	app.post('/contracts/create', Contracts.create);

	app.post('/contracts/update', Contracts.updateOne);

	app.post('/buildings/create', Building.create);

	app.get('/buildings/getall', Building.getAll);

	app.get('/services/getall', Service.getAll);

	app.post('/invoices/create', Invoice.create);

	app.get('/invoices/getall', Invoice.getAll);
};
