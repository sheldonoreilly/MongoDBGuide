const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({ name: String });

// will query mongod for collection 'user', if doesnt exist Mongoose (maybe mongod) will create it.
// so 'mongoose.model('user', userSchema);' creates a collection of 'user' and tells
//Mongoose the Schema (UserSchema) to use when dealing with this collection.
const User = mongoose.model("user", UserSchema);

//if another file want to use of us, a require(user.js??) then the UserModel is returned
module.exports = User;
