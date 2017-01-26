import { User } from './models.js';
import { Bill } from './models.js';
//.findOne, .create, .find({})


// ALL UNTESTED


function getAllUsers(req, res, next) {
  User.find({})
  .then(function(users) {
    res.send(users);
  });
}

function getFriends(req, res, next) {
  User.findOne({id: SOMETHING})
  .then(function(user) {
    User.find({})
    .where(id).in(user.friends)
    .then(function(friends) {
      res.send(friends);
    });
  });
}

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
function getOwnBills(req, res, next) {
  User.findOne({id: SOMETHING})
  .then(function(user) {
    Bill.find({})
    .where(id).in(user.bills)
    .then(function(bills) {
      res.send(bills);
    });
  });
}

function postBill(req, res, next) {
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
          console.log(error); 
        } else {
          res.send('Success');
        }
      });
    });
  });
}

export { postBill, getOwnBills, getAllUsers, getFriends };


