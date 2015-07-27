// lesson1.js

Template.lesson1.helpers({});

Template.lesson1.events({

	"submit #mathform": function (event) {
    event.preventDefault();
    var a = event.target.a.value;
    var b = event.target.b.value;
    event.target.c.value = parseInt(a)+parseInt(b);
  }

});

