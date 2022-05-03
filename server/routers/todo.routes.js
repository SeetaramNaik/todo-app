const express = require('express');
const router = express.Router();

const {
    listAllTodo,
    createOneTodo,
    updateOneTodo,
    deleteTodo
} = require('../controllers/controller');

router.get('/', listAllTodo);

router.post('/',createOneTodo);

router.put('/:id',updateOneTodo);

router.delete('/:id',deleteTodo);

module.exports = router;