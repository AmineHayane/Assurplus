const Justificatifs = require('../models').Justificatifs;

module.exports = {

  list(req, res) {

  return Justificatifs
    .findAll()
    .then(justifs => res.status(200).send(justifs))
    .catch(error => res.status(400).send(error));

    },

  create(req,res) {
    return Justificatifs
      .create({
        type: req.body.type,
        fileurl:  req.body.fileurl,
        datedepot: new Date(),
      })
      .then(justif => res.status(201).json(justif))
      .catch(error => res.status(400).send(error));
  },

delete(req,res) {

  return Justificatifs

  .destroy({ where: { id: req.params.id} })
  .then(justifs => res.status(201).json(justifs))
  .catch(error => res.status(400).send(error));

},


};

