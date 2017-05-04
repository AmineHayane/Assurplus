const User = require('../models').User;
const PhoneNumber = require('../models').PhoneNumber;


module.exports = {

    list(req, res) {
  return PhoneNumber
    .findAll({
      include: [{
        model: User,
          as: 'users',
          where : {user_mail : 'b.kouhen@gmail.com'}
      }],
    })
    .then(phonenumbers => res.status(200).send(phonenumbers))
    .catch(error => res.status(400).send(error));
}


};