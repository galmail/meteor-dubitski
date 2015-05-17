///////// ROUTER /////////

Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('home', {data: {title: 'The Dubitski Family'}});
});

Router.route('/naomi');
Router.route('/eitan');
Router.route('/laura');
Router.route('/gal');

if (Meteor.isClient) {
  // code to run on the client
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
