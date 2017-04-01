const Uploads = require('../models').Uploads;

module.exports = {
  create(req, res) {
    return Uploads
      .create({
        url: req.body.url,
      })
      .then(upload => res.status(201).send(upload))
      .catch(error => res.status(400).send(error));
  },
    list(req, res) {
  return Uploads
    .findAll()
    .then(uploads => res.status(200).send(uploads))
    .catch(error => res.status(400).send(error));
},
    destroy(req, res) {
  return Uploads
    .findById(req.params.uploadId)
    .then(upload => {
      if (!upload) {
        return res.status(400).send({
          message: 'Upload Not Found',
        });
      }
      return upload
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
};