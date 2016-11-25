angular.module("MyFirstApp", [])
    .controller("FirstController", function($scope, $http) {
      $scope.tickets = [];
        $http.get("/api/ticket")
            .success(function(data) {
                console.log(data);
                $scope.tickets = data;
            })
            .error(function(err) {

            });
    });
