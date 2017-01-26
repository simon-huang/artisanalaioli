// var Q = require('q');
var User = require('./Model.js').User;
var Bill = require('./Model.js').Bill;

//.findOne, .create, .find({})


/*
to POST a bill:
  1. Put bill in database
  2. Put bill in user's bill field
  3. Send response
*/
module.exports = {
  newBill: function(req, res, next) {
    var newBill = {
      userID: SOMETHING,
      total: SOMETHING,
      people: SOMETHING,
      info: SOMETHING
    };
    Bill.create(newBill)
      .then(function(createdBill) {
        User.find({id: SOMETHING})
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
      });
  }
};


