var keystone = require('keystone'),
  async = require('async'),
  _ = require('underscore');


exports = module.exports = function(req, res, next) {
  var locals = res.locals,
    view = new keystone.View(req, res);
  locals.projectId = req.params.project;

  //locals.section = 'portfolio';

  var Portfolio = keystone.list('Portfolio');
  view.on('init', function(next) {
    Portfolio.model.find().sort('name').exec(function(err, portfolio) {
      var portfolioData = _.map(portfolio, function(project){
        if (project._id == locals.projectId){
          locals.project = project;
        } else{
        }
      });
      locals.portfolio = portfolio;

      next();
    });
  });
    view.render('portfolio');

};
