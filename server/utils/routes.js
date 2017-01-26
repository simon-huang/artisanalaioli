import { passport, register } from './authentication';


export default function routes(app, express) {
  app.post('/auth/register', register);
  app.post('/auth/login', 
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/auth/login',
                                     failureFlash: true })
  );
}
