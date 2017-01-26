var User = require('./Model.js').User;
var Bill = require('./Model.js').Bill;
//.findOne, .create, .find({})


// ALL UNTESTED

/*
Consider refactoring to also send all bills related to you (the ones
you don't own but were part of)

When refactoring to also retrieve outstanding debts & debtors,
send an object instead of an array:
  var allBills = {
    'bills': bills,
    debts: [],
    debtors: []
  };
*/
var getOwnBills = function(req, res, next) {
  User.findOne({id: SOMETHING})
  .then(function(user) {
    Bill.find({})
    .where(id).in(user.bills)
    .then(function(bills) {
      res.send(bills);
    });
  });
};

var postBill = function(req, res, next) {
  var newBill = {
    userID: SOMETHING,
    total: SOMETHING,
    people: SOMETHING,
    info: SOMETHING
  };
  Bill.create(newBill)
  .then(function(createdBill) {
    User.findOne({id: SOMETHING})
    .then(function(user) {
      user.bills.push(createdBill.id);
      user.save(function(error, savedUser) {
        if (error) {
          console.log(error) 
        } else {
          res.send('Success');
      }
    });
  });
};

export { postBill, getOwnBills };


