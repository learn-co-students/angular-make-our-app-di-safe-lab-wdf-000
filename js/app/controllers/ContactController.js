function ContactController(s, to) {
	s.name = 'Bill Gates';

	to(function () {
		s.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);