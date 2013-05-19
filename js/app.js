'use strict';

/* App Module */

<<<<<<< HEAD
angular.module('realstory',['homeMediaFilters','ngSanitize']).
=======
angular.module('realstory',[]).
>>>>>>> master
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/homes', {templateUrl: 'partials/h_list.html',   controller: HomeListCtrl}).
      when('/homes/:homeId', {templateUrl: 'partials/h_detail.html', controller: HomeDetailCtrl}).
      otherwise({redirectTo: '/homes'});
}]);
