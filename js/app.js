'use strict';

/* App Module */

angular.module('realstory',['homeMediaFilters','ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/homes', {templateUrl: 'partials/h_list.html',   controller: HomeListCtrl}).
      when('/homes/:homeId', {templateUrl: 'partials/h_detail.html', controller: HomeDetailCtrl}).
      otherwise({redirectTo: '/homes'});
}]);
