(function() {

  var formValidator = angular.module("formValidator",[]);

    formValidator.controller("FormControler", ["$scope", function($scope){

      $scope.register = function() {
         $scope.successfullySubmitted = true;
     }

    }]);

})();
