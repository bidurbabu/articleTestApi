'use strict';


exports.find = function(fun, callback) {
callback(null, { 'hi': 'there'});
};

exports.findById = function(articleId, callback) {
callback(null, { 'hi': articleId });
};
