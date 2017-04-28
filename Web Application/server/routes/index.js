const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const usersController = require('../controllers').users;
const uploadsController = require('../controllers').uploads;
const auth = require('../auth');
const BienController = require('../controllers').biens;
const predictionController = require('../controllers').prediction;
const justificatifsController = require('../controllers').justificatifs;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      message: 'Welcome to the Todos API!',
    }));

    app.post('/api/todos', todosController.create);
    app.get('/api/todos', auth.verifyToken, todosController.list);
    app.get('/api/todos/:todoId', todosController.retrieve);
    app.put('/api/todos/:todoId', todosController.update);
    app.delete('/api/todos/:todoId', todosController.destroy);

    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.get('/api/todos/:todoId/items', todoItemsController.list);
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

    app.all('/api/todos/:todoId/items', (req, res) =>
        res.status(405).send({
          message: 'Method Not Allowed',
      }));

    // Users

    app.post('/api/users/register' , usersController.registerUser);
    app.post('/api/users/login', usersController.loginUser);
    app.get('/api/users/check-state', auth.verifyToken, usersController.checkState);
    app.get('/api/users', usersController.list);
    app.post('/api/users', usersController.retrieve);
    app.put('/api/users', usersController.update);
    app.put('/api/users/changeEmail', usersController.changemail);

    // Uploads

    app.post('/api/uploads', uploadsController.create);
    app.get('/api/uploads', uploadsController.list);
    app.delete('/api/uploads/:uploadId', uploadsController.destroy);

    // Coffre Fort

    app.get('/api/objets', BienController.list);
    app.get('/api/calculpatrimoine', BienController.calculPatrimoine);

    app.post('/api/ajoutobjet', BienController.create);
    app.delete('/api/supprimerobjet/:id', BienController.delete);

    // Justificatifs

    app.get('/api/justificatifs', justificatifsController.list);
    app.post('/api/ajoutjustificatif', justificatifsController.create);
    app.delete('/api/supprimerjustificatif/:id', justificatifsController.delete);

    // Predictions

    app.post('/api/prediction', predictionController.predict);

};