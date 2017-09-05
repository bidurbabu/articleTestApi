'use strict';

var Task = require('../models/articleModel');

exports.list_all_articles = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_article = function(req, res) {
  Task.findById(req.params.articleId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
