const validator = require("validator");
const bcrypt = require("bcrypt");
const { genSalt } = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method 
UserSchema.statics.signup = async function (email, password) {
  //validator
  if (!email || !password) {
    throw Error("All fields must be field");
  }
  if (!validator.isEmail(email)) {
    throw Error("Enter valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Enter a strong Password");
  }

  //this = User
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

//Static Login Method 
UserSchema.statics.login = async function (email, password){

    if (!email || !password) {
        throw Error("All fields must be field");
      }
      if (!validator.isEmail(email)) {
        throw Error("Enter valid email");
      }
    const user = await this.findOne({ email });
    if(!user){
        throw Error('Enter valid email or password')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Enter valid email or password')
    }
    return user
}

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
