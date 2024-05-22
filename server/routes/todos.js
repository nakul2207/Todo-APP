const express = require('express');
const router = express.Router();

const {createTodo} = require('../controller/createTodo');
const {getTodo,getTodobyid} = require('../controller/getTodo');
const {updateTodo} = require('../controller/updateTodo');
const {deleteTodo} = require('../controller/deleteTodo');


router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id', getTodobyid);
router.put('/updateTodo/:id', updateTodo);  
router.delete('/deleteTodo/:id', deleteTodo);

module.exports = router;

