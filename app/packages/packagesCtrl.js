angular
  .module("devmtnTravel")
  .controller("packagesCtrl", function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(function(response) {
      $scope.packages = response.data;
      if ($stateParams.country) {
        $scope.packages = $scope.packages.filter(function(package) {
          package.country === $stateParams.country;
        });
      }
    });
  });
