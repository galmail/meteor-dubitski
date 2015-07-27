// lesson1.js

var lesson1 = {

	calculate: function(){
		this.updateSum();
		this.updateMulti();	
		this.updateDivi();
	},


	updateSum: function(){
		var a = Session.get('a');
		var b = Session.get('b');
		var total = parseInt(a) + parseInt(b);
		Session.set('sumTotal', total);
	},

	updateMulti: function(){
		var a = Session.get('a');
		var b = Session.get('b');
		var total = parseInt(a) * parseInt(b);
		Session.set('multiTotal', total);
	},

	updateDivi: function(){
		var a = Session.get('a');
		var b = Session.get('b');
		var total = parseInt(a) / parseInt(b);
		Session.set('diviTotal', total);
	}

};


Template.lesson1.helpers({

	sumTotal: function(){
		return Session.get('sumTotal');
	},

  multiTotal: function(){
		return Session.get('multiTotal');
	},

	diviTotal: function(){
		return Session.get('diviTotal');
	}



});

Template.lesson1.events({

	"change #a": function (event) {	
		Session.set('a',event.target.value);
		lesson1.calculate();
	},

	"change #b": function (event) {	
		Session.set('b',event.target.value);
		lesson1.calculate();
	}

});

