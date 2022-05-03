const AppTodo = require('../models/models.js');

exports.createOneTodo = (req, res) => {
  AppTodo.create(req.body)
    .then((todo) => {
      console.log({ todo });
      res.json({
        message: "You've successfully added a TODO!!!",
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: 'SORRY..Your TODO list cannot be added',
        error: err.message,
      });
    });
};

exports.listAllTodo = (req, res) => {
  AppTodo.find()
    .then((todo) => {
      console.log({ todo });
      res.json(todo);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isn't TODO available...", error: err.message });
    });
};

exports.updateOneTodo = (req, res) => {
  AppTodo.findByIdAndUpdate(req.params.id, req.body)
    .then((todo) => {
      console.log({ todo });
      return res.json({
        message: "You've successfully updated a TODO...",
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Sorry your todo list cannot be updated...',
        error: err.message,
      });
    });
};

exports.deleteTodo = (req, res) => {
  AppTodo.findByIdAndDelete(req.params.id, req.body)
    .then((todo) => {
      console.log({ todo });
      res.json({
        message: "You've successfully deleted a todo...",
        todo,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: 'SORRY!!!Your todo list is not there...',
        error: err.message,
      });
    });
};
