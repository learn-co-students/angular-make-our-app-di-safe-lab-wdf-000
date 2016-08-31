function ContactController(scope, timeout) {
	scope.name = 'Antoin Campbell';

	timeout(function () {
		$scope.name = 'Scott Mescudi';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
	
