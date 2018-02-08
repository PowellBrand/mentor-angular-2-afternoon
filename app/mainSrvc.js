angular.module('devmtnTravel').service('mainSrvc', function( $http ) {
    this.getTravelInfo = function() {
      $http.get('https://practiceapi.devmountain.com/api/travel/travel-info');
    };
  
    this.getPackageInfo = function() {
      $http.get('https://practiceapi.devmountain.com/api/travel/package-info');
    };
  });