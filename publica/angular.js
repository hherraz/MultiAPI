angular.module("MyFirstApp", [])
    .controller("FirstController", function($scope, $http) {

        $http.get("/api/ticket")
            .success(function(data) {
                console.log(data);
            })
            .error(function(err) {

            });
    });