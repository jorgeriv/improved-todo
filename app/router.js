'use strict';
function router($routeProvider){//}, $locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'components/home/template.html',
    controller: 'homeController'
  })
  .otherwise({
    redirectTo: '/home'
  });

  // $locationProvider
  // .html5Mode(true);
}
angular.module('gotm')
  .config(['$routeProvider', '$locationProvider', router]);
