var keystone = require('keystone'),
  async = require('async'),
  _ = require('underscore');


exports = module.exports = function(req, res, next) {
  var locals = res.locals,
    view = new keystone.View(req, res);
  locals.projectId = req.params.project;

  //locals.section = 'member';

  var Project = keystone.list('Project');

  view.on('init', function(next) {
    Project.model.find().exec(function(err, project) {

      var projectData = _.map(project, function(project){

        if (project._id == locals.projectId){
          locals.project = project;
        } else {

        }
      });
      locals.project = project;

      next();
    });
  });

  view.render('project');

};