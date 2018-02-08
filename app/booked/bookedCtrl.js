angular
  .module("devmtnTravel")
  .controller("bookedCtrl", function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(function({data}) {
      $scope.allPackages = response.data;

      if ($stateParams.id) {
        $scope.package = $scope.packageIndex = $scope.allPackages.find(function(
          package
        ) {
          return package.id === parseInt($stateParams.id);
        });
      }
    });
  });
