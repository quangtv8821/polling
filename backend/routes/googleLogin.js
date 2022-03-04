const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oidc')
const bcrypt = require('bcrypt')
const db = require("../models")
const Users = db.users

const router = express.Router();

passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect/google',
  scope: ['profile', 'email']
},
  async (issuer, profile, cb) => {

    const validString = '@rabiloo.com'
    if (profile.emails[0].value.includes(validString)) {
      const user = await Users.findOne({
        where: {
          email: profile.emails[0].value
        }
      })

      if (!user) {
        bcrypt.hash(profile.id, 10, async (error, hash) => {
          if (error) {
            return res.send({
              message: error
            })
          } else {
            const register = await Users.create({
              email: profile.emails[0].value,
              password: hash,
              role: 'user'
            })
            console.log(register.dataValues)
            return cb(null, {
              email: register.dataValues.email,
              password: profile.id
            })
          }
        })
      } else {
        return cb(null, {
          email: user.dataValues.email,
          password: profile.id
        })
      }
    } else {
      return cb(null, {
        message: "It's not rabiloo email please try another"
      })
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, user);
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.get('/login/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/oauth2/redirect/google', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log(req.user);
    res.redirect('http://localhost:3000/login-google/?email=' + req.user.email + '&password=' + req.user.password + '&message=' + req.user.message)
  });
module.exports = router;