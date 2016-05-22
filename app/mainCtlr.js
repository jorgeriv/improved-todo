'use strict';
function mainCtrl($scope){
  $scope.title = 'My app';
}

angular('gotm')
  .controller('mainCtrl', ['$scope', mainCtrl]);
