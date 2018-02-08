angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
    mainSrvc.getTravelInfo().then( function( {data} ) {
      $scope.locations = data;
    });
  });