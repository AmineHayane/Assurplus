const User = require('../models').User;
const PhoneNumber = require('../models').PhoneNumber;
const Habitation = require('../models').Habitation;
const Safe = require('../models').Safe;


const config = {secret : 'azertyuiopmlkjhgfdsqwxcvbn', database: 'postgres://qftioduv:ZPRMRqRgl8yZxdtayEILGwqnP7pUGrDE@fizzy-cherry.db.elephantsql.com:5432/qftioduv'};
const jwt = require('jsonwebtoken');
const auth = require('../auth');
const bcrypt = require('bcrypt-nodejs');


module.exports = {

    checkState(req, res) {
        console.log('check-headers', req.headers);
        let content = {
            success: true,
            message: 'Successfully logged in'
          }
        res.send(content);
    },


    registerUser(req, res) {
  return User
    .findOne({where: {user_mail: req.body.user_mail}})
    .then(user => {
      if (user) {
        return res.send({
            success : false,
            message: 'user already exists',
        });
      } else {
          /*return Promise.all([User.create({
                user_mail : req.body.user_mail,
                user_password : bcrypt.hashSync(req.body.user_password, bcrypt.genSaltSync(8), null),
          }), PhoneNumber.create({
              PhoneNumberCountryPrefix : 33,
              PhoneNumber : 649594920,
              PhoneNumberTypeMobile : true
          })])*/
          return User.create({
              user_mail : req.body.user_mail,
              user_password : bcrypt.hashSync(req.body.user_password, bcrypt.genSaltSync(8), null),
          })
              .then(user => {
                /*user.addPhoneNumber(number);
                console.log('number', number);*/
                console.log('user',user);
                let token = jwt.sign({data:user}, 'azertyuiopmlkjhgfdsqwxcvbn', {
                      expiresIn : 60*60*24 // Token expires in 24h = 60*60*24
                    });
                console.log('token', token);
                let content = {
                      user: user,
                      success: true,
                      message: 'You created a new user',
                      token: token
                    };
              return res.status(200).send(content)
          });

      }
    })
    .catch(error => res.status(400).send(error));
},

    loginUser(req, res) {
  return User
    .findOne({where: {user_mail: req.body.user_mail}})
    .then(user => {
      if (!user) {
        return res.send({
            success : false,
            message: 'user does not exist',
        });
      }

      if (!bcrypt.compareSync(req.body.user_password, user.user_password)) {
          return res.send({
              success : false,
              message : 'incorrect password',
          });
      }

                console.log('user',user);
                let token = jwt.sign({data:user}, 'azertyuiopmlkjhgfdsqwxcvbn', {
                      expiresIn : 60*60*24
                    });
                console.log('token', token);
                let content = {
                      user: user,
                      success: true,
                      message: 'You logged in',
                      token: token
                    };
              return res.status(200).send(content)

    })
    .catch(error => res.status(400).send(error));
},
    list(req, res) {
  return User
    .findAll({
        attributes : {exclude : ['user_password']},
      include: [{
        model: PhoneNumber,
          as: 'phoneNumbers',
      }, {
            model : Habitation,
          as : 'habitations',
          include : [{
                model : Safe,
              as : 'safes',
          }]
      }],
    })
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
},
    retrieve(req, res) {
        return User
            .findOne({
                attributes : {exclude : ['user_password']},
                where: {user_mail: req.body.user_mail},
                include : [{
                    model : PhoneNumber,
                    as : 'phoneNumbers'
                }, {
                    model : Habitation,
                    as : 'habitations',
                }]
            })
            .then((user) => {
            if (!user) {
                return res.send({
                    success : false,
                    message: 'User does not exist',
                });
            } else {
                return res.status(200).send(user)
            }

            }).catch(error => res.status(400).send(error));
    },

    update(req ,res)  {
        return User
            .findOne({where : {user_mail : req.body.user_mail}})
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                      message: 'User does not exist',
                    });
                  }
                  return user
                      .update({
                          UserLastName : req.body.UserLastName || user.UserLastName,
                          UserFirstName : req.body.UserFirstName || user.UserFirstName,
                          user_mail : req.body.user_mail || user.user_mail,
                          user_password : req.body.user_password || user.user_password,
                          UserGender : req.body.UserGender || user.UserGender,
                          UserLivingSituation : req.body.UserLivingSituation || user.UserLivingSituation,
                          UserJob : req.body.UserJob || user.UserJob,
                          UserPaymentType : req.body.UserPaymentType || user.UserPaymentType,
                          UserIncome : req.body.UserIncome || user.UserIncome,
                          UserIdentityDocument : req.body.UserIdentityDocument || user.UserIdentityDocument,
                          UserBirthDate : req.body.UserBirthDate || user.UserBirthDate,
                          UserIdentityModifed : true,
                      })
                      .then(() => res.status(200).send(user))
                      .catch((error) => res.status(400).send(error));
            }).catch(error => res.status(400).send(error));
    },
    changemail(req, res) {
        return User
            .findOne({where: {user_mail : req.body.UserEmail}})
            .then((user) => {
                if (!user) {
                    return res.send({
                        success : false,
                        message: 'User does not exist',
                    });
                  }

                  if (!bcrypt.compareSync(req.body.passwordCheck, user.user_password)) {
                      return res.send({
                          success : false,
                          message : 'Incorrect password',
                      });
                  } else {
                    return user
                        .update({
                            user_mail : req.body.newUserEmail
                        })
                        .then(() => {
                        let token = jwt.sign({data:user}, 'azertyuiopmlkjhgfdsqwxcvbn', {
                          expiresIn : 60*60*24
                        });
                        let content = {
                                  user: user,
                                  success: true,
                                  message: 'Email successfully changed',
                                    token : token
                                };
                        res.status(200).send(content);
                        })
                        .catch((error) => res.status(400).send(error));
                  }
            }).catch(error => res.status(400).send(error));
    },
    changepassword(req ,res) {
        return User
            .findOne({where : {user_mail : req.body.UserEmail}})
            .then((user) => {
                if (!user) {
                    return res.send({
                        success : false,
                        message: 'User does not exist',
                    });
                  }

                if (!bcrypt.compareSync(req.body.oldUserPassword, user.user_password)) {
                      return res.send({
                          success : false,
                          message : 'Incorrect password',
                      });
                  } else {
                    return user
                        .update({
                            user_password : bcrypt.hashSync(req.body.newUserPassword, bcrypt.genSaltSync(8), null)
                        })
                        .then(() => {
                        let content = {
                                  user: user,
                                  success: true,
                                  message: 'Password successfully changed'
                        };
                        res.status(200).send(content);
                        })
                        .catch((error) => res.status(400).send(error));
                  }
            }).catch(error => res.status(400).send(error));
    }
};