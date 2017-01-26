import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcryptOriginal from 'bcrypt';
import { User } from './db';

var bcrypt = Promise.promisifyAll(bcryptOriginal);

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.find({ username: username }).then(function(user) {
      bcrypt.compareAsync(password, user.password)
        .then(function(isCorrect) {
          return isCorrect ? done(null, user) : done(null, false);
        }).catch(function(err) {
          done(err); 
        });
    });
  }));

function register(user, password) {
  return User.find({ username: username })
    .then(function(user) {
      if (!user) {
        return bcrypt.genSaltAsync()
          .then(function(salt) {
            return bcrypt.hashAsync(password, salt);
          }).then(function(hashedPassword) {
            var newUser = new User({ 
              username: username,
              password: hashedPassword
            });

            return newUser.save();
          }).then(function(user) {
            console.log('user saved!', user); 
          }).catch(function(err) {
            console.log('some kind of error', err); 
          });
      }
    });
}

export { passport, register };
