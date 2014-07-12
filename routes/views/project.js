var keystone = require('keystone'),
  async = require('async'),
  _ = require('underscore');


exports = module.exports = function(req, res, next) {
  var locals = res.locals,
    view = new keystone.View(req, res);
  locals.projectId = req.params.project;

  //locals.section = 'project';

  var Projects = keystone.list('Projects');

  view.on('init', function(next) {
    Projects.model.find().exec(function(err, projects) {

      locals.projects = projects;
      next();
      });
    });

    view.render('project');

};
