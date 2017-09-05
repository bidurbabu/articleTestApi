'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/articleController');

  // todoList Routes
  app.route('/articles')
    .get(todoList.list_all_articles)

  app.route('/articles/:articleId')
    .get(todoList.read_a_article)
};
