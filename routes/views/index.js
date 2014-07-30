var keystone = require('keystone');

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
	
	// Render the view
	view.render('index');
	
};
