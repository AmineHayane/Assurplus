const biens = require('../models').biens;
const User = require('../models').User;

module.exports = {

  list(req, res) {
   
  return biens
    .findAll({
        include : [{
            model : User,
            as : 'users'
        }]
    })
    .then(biens => res.status(200).send(biens))
    .catch(error => res.status(400).send(error));
  
    },

    listUser(req, res) {
      return biens
          .findAll({
              include : [{
                  model: User,
                  as : 'users',
                  where : {user_mail : req.body.user_mail}
              }]
          })
          .then(biens => res.status(200).send(biens))
          .catch(error => res.status(400).send(error));
    },

  create(req,res) {
    
    return Promise.all([biens
      .create({
        prixachat: req.body.prixachat,
        imageurl:  req.body.imageurl,
        description: req.body.description,
        dateachat: req.body.dateachat,
        evaluation: "0"
      }),
        User.findOne({where: {user_mail: req.body.user_mail}})
    ])
      .then(([bien, user]) => {
        bien.addUser(user);
        console.log('bien', bien);
        console.log('user', user);
        res.status(201).json(bien)
    })
      .catch(error => res.status(400).send(error));
  },

delete(req,res) {

  return biens

  .destroy({ where: { id: req.params.id} }) 
  .then(biens => res.status(201).json(biens))
  .catch(error => res.status(400).send(error));

},

calculPatrimoine(req,res) {

  return biens

  .findAll() 
  .then(biens => res.status(200).send(biens))
  .catch(error => res.status(400).send(error));

}, 



};

