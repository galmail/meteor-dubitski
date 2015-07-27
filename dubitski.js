///////// ROUTER /////////

Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('home', {data: {title: 'The Dubitski Family'}});
});

/// NAOMI ROUTES ///

Router.route('/naomi');
Router.route('/naomi/code', function () {
  this.render('naomi-coding');
});
Router.route('/naomi/code/lesson1', function () {
  this.render('lesson1');
});

/// OTHER ROUTES ///

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
