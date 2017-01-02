angular.module("MyFirstApp", [])
    .controller("FirstController", function($scope, $http) {
      $scope.tickets = [];
        $http.get("http://localhost:3000/api/ticket")
            .success(function(data) {
                console.log(data);
                $scope.tickets = data;
            })
            .error(function(err) {

            });
    });
