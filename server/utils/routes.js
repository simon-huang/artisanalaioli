import { passport, register } from './authentication';

function routes(app, express) {
  app.post('/auth/register', register);
  app.post('/auth/login', 
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/auth/login',
                                     failureFlash: true })
  );
}
