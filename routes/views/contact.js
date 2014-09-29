var keystone = require('keystone'),
  async = require('async'),
  _ = require('underscore');

exports = module.exports = function(req, res) {
  
  var locals = res.locals,
    view = new keystone.View(req, res);
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'home';
  
    //load siteAssets
  var SiteAssets = keystone.list('SiteAssets');
  view.on('init', function(next) {
    SiteAssets.model.find().exec(function(err, assets){
      locals.assets = assets;
      //console.log(assets);
      next();
    });
  });

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
  
  // Render the view
  view.render('contact');
  
};
