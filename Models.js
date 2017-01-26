var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  bills: [mongoose.Schema.Types.ObjectId],
  friends: [mongoose.Schema.Types.ObjectId],
  debts: [mongoose.Schema.Types.ObjectId],
  debtors: [mongoose.Schema.Types.ObjectId],
  venmo: String
});

var BillSchema = new mongoose.Schema({
  userID: mongoose.Schema.Types.ObjectId,
  total: Number,
  people: [mongoose.Schema.Types.ObjectId],
  info: String,
  outstanding: [{
    userID: mongoose.Schema.Types.ObjectId, 
    amount: Number
  }],
  image: String
});

module.exports = {
  User: mongoose.model('User', UserSchema);
  Bill: mongoose.model('Bill', BillSchema);
};


