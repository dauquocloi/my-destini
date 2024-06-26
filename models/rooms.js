var mongoose = require('mongoose');
const Entity = require('./index');
const Schema = mongoose.Schema;
// Create a Mongoose Schema
const RoomsSchema = new Schema({
	roomindex: Number,
	roomprice: Number,
	roomdeposit: Number,
	roomtypes: String,
	roomacreage: Number,
	maylanh: Boolean,
	giengtroi: Boolean,
	gac: Boolean,
	kebep: Boolean,
	bonruachen: Boolean,
	cuaso: Boolean,
	bancong: Boolean,
	tulanh: Boolean,
	tivi: Boolean,
	thangmay: Boolean,
	nuocnong: Boolean,
	giuong: Boolean,
	nem: Boolean,
	tuquanao: Boolean,
	chungchu: Boolean,
	baove: Boolean,

	motobikequantity: {
		type: Number,
		default: 0,
	},
	roomtoilet: {
		type: Number,
		default: 0,
	},
	dryingyard: {
		type: Number,
		default: 0,
	},
	roomstate: {
		type: Number,
		default: 0,
		// 0 - trống
		// 1 - đang ở
		// 2 - sắp trả phòng
	},
	opentimes: {
		type: Number,
		default: 0,
		// if 0 => Mở cửa tự do
		// if 1 => Mở cửa theo quy định
	},
	pet: {
		type: Number,
		default: 0,
		// if 0 => ko cho nuôi thú cưng
		// if 1 => có cho nuôi thú cưng
	},

	service: {
		type: Schema.Types.ObjectId,
		ref: 'ServicesEntity',
	},

	building: {
		type: Schema.Types.ObjectId,
		ref: 'BuildingsEntity',
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'UsersEntity',
	},
	invoice: {
		type: Schema.Types.ObjectId,
		ref: 'InvoicesEntity',
	},
	contract: {
		type: Schema.Types.ObjectId,
		ref: 'ContractsEntity',
	},
	payment: {
		type: Schema.Types.ObjectId,
		ref: 'PaymentsEntity',
	},
});

// RoomsSchema.pre('save', async function (next) {
// 	const serviceId = this.service;
// 	let foundService;
// 	try {
// 		const foundService = await Entity.ServicesEntity.findById(serviceId).exec();

// 		if (!foundService) {
// 			const error = new Error('Không tìm thấy dữ liệu service với id đã cung cấp.');
// 			return next(error);
// 		}
// 		// elecprice when create room
// 		console.log('log found id 1:', foundService);
// 		this.elecprice = (this.lastelecnumber - this.firstelecnumber) * foundService.electric;
// 		console.log(this.elecprice);
// 		next();
// 	} catch (err) {
// 		next(err);
// 	}
// });

exports.RoomsEntity = mongoose.model('RoomsEntity', RoomsSchema, 'rooms');
// Register the room schema
