var zooApp = angular.module('zooApp', []);

zooApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Aves', {
	templateUrl: 'aves.html',
	controller: 'AvesController'
      }).
      when('/Mamiferos', {
	templateUrl: 'mamiferos.html',
	controller: 'MamiferosController'
      }).
    when('/Reptiles', {
	templateUrl: 'reptiles.html',
	controller: 'ReptilesController'
      }).
      otherwise({
	redirectTo: '/Aves'
      });
}]);
zooApp.controller('AvesController', function($scope) {
	$scope.message = 'Aves';
});
zooApp.controller('MamiferosController', function($scope) {
	$scope.message = 'Mamiferos';
});
zooApp.controller('ReptilesController', function($scope) {
	$scope.message = 'Reptiles';
});
