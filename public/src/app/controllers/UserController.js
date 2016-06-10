(function () {
    angular
        .module('app')
        .controller('UserController',
            function ($scope, $http) {

                $scope.save = function () {
                    $http({
                        url: "http://localhost:8080/saveUser",
                        params: {
                            username: $scope.username,
                            firstname: $scope.firstName,
                            lastname: $scope.lastName,
                            email: $scope.email,
                            password: $scope.password,
                            admin: "true",
                            active: "true"
                        }
                    }).then(function mySucces(response) {
                        alert("record is successfully inserted");
                    }, function myError(response) {
                        $scope.myWelcome = response.statusText;
                    });
                }

                $scope.login = function () {
                    $http({
                        url: "http://localhost:8080/login",
                        params: {
                            username: $scope.loginUsername,
                            password: $scope.loginPassword
                        }
                    }).then(function mySucces(response) {
                        alert(JSON.stringify(response.data));
                    }, function myError(response) {
                        alert("Cross Domain Error");
                    });
                }


            }
        )
    ;
})();
