var keystone = require('keystone'),
  Types = keystone.Field.Types;

/*
Model for representing projects to include in the portfolio
*/
var Portfolio = new keystone.List('Portfolio');

Portfolio.add({
  name: { type: Types.Text, required: true, index:true },
  image: { type: Types.CloudinaryImage }
});

// Provide access to Keystone
Portfolio.schema.virtual('canAccessKeystone').get(function() {
   return this.isAdmin;
});  

/**
* Registration
*/

Portfolio.defaultColumns = 'name, images, isAdmin';
Portfolio.register();
