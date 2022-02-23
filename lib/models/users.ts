import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	birthDate: {
		type: Date,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
  userType: {
    type: String,
    required: false,
    default: "common",
    enum: ["admin", "common"]
  }
});

export default mongoose.model('Users', UserSchema)