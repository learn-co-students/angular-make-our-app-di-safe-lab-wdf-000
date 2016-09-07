function ContactController(person, delay) {
	person.name = 'Bill Gates';

	delay(function () {
		person.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);