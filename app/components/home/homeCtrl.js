(function(){ 'use strict';
function ctrl($scope){
  $scope.title = 'My app';
}
  angular.module('gotm')
    .controller('homeController',['$scope', ctrl]);
}());
