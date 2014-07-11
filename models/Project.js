var keystone = require('keystone'),
  Types = keystone.Field.Types;

/*
Model for representing projects to include in the portfoliod
*/
var Project = new keystone.List('Project');

Project.add({
  name: { type: Types.Text, required: true, index:true },
  images: { type: Types.CloudinaryImages }
});

// Provide access to Keystone
Project.schema.virtual('canAccessKeystone').get(function() {
   return this.isAdmin;
});  

/**
* Registration
*/

Project.defaultColumns = 'name, images, isAdmin';
Project.register();
