var keystone = require('keystone'),
  Types = keystone.Field.Types;

/*
Model for representing projects to include in the portfoliod
*/
var Projects = new keystone.List('Projects');

Projects.add({
  name: { type: Types.Text, required: true, index:true },
  images: { type: Types.CloudinaryImages }
});

// Provide access to Keystone
Projects.schema.virtual('canAccessKeystone').get(function() {
   return this.isAdmin;
});  

/**
* Registration
*/

Projects.defaultColumns = 'name, images, isAdmin';
Projects.register();
