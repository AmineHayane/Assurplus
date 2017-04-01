const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const usersController = require('../controllers').users;
const uploadsController = require('../controllers').uploads;
const auth = require('../auth');

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

    // Uploads

    app.post('/api/uploads', uploadsController.create);
    app.get('/api/uploads', uploadsController.list);
    app.delete('/api/uploads/:uploadId', uploadsController.destroy);

};