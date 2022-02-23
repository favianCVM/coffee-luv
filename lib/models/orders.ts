import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	date: {
		type: Date,
		required: false,
		default: Date.now,
	},
	location: {
		type: String,
		required: true,
	},
	product: {
		type: Object,
		required: true,
	},
	type: {
		type: String,
		required: true,
		enum: ["local", "delivery"],
	},
});

export default mongoose.model('Orders', OrderSchema)