import { passport, register, logout } from './authentication';
import { postBill, getOwnBills } from '../db/controllers';

export default function routes(app, express) {
  app.post('/auth/register', register);
  app.post('/auth/login', 
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/auth/login',
                                     failureFlash: true })
  );
  app.post('/auth/logout', logout);
  app.post('/bills', postBill);
  app.get('/bills', getOwnBills); // own bills
}
