'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _postsController = require('./Controller/postsController');

var _postsController2 = _interopRequireDefault(_postsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var Controller = exports.Controller = new _postsController2.default();

_mongoose2.default.connect('mongodb://localhost/blog');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', Controller.create);
app.get('/posts', Controller.index);
app.get('/posts/:id', Controller.read);
app.delete('/posts/:id', Controller.delete);
app.put('/posts/:id', Controller.update);

app.listen(3333, function () {
    console.log('cool');
});