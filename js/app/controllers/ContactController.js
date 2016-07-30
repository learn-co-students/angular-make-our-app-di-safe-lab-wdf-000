function ContactController(random, words) {
	random.name = 'Bill Gates';

	words(function () {
		random.name = 'Steve Jobs';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);

ContactController.$inject = ['$scope','$timeout'];
