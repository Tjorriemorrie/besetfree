var app = angular.module('app', ['ngRoute']);
console.debug('app', app);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/assets/templates/home.html'
//                controller: 'BookController',
//                resolve: {
//                    // I will cause a 1 second delay
//                    delay: function ($q, $timeout) {
//                        var delay = $q.defer();
//                        $timeout(delay.resolve, 1000);
//                        return delay.promise;
//                    }
//                }
            })
            .when('/services', {
                templateUrl: '/assets/templates/services.html'
            })
            .when('/hypnotherapy', {
                templateUrl: '/assets/templates/hypnotherapy.html'
            })
            .when('/affiliations/and/accreditations', {
                templateUrl: '/assets/templates/affiliations_and_accreditations.html'
            })
            .when('/contact', {
                templateUrl: '/assets/templates/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    }
]);


app.controller('mainCtrl', ['$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {
        $scope.submit = function (form) {

            // If form is invalid, return and let AngularJS show validation errors.
            if (form.$invalid) {
                $scope.feedback = 'Form is invalid. Please complete all fields.';
                return;
            }

            $scope.submitted = true;

            // Default values for the request.
            var params = {
                'name': $scope.name,
                'email': $scope.email,
                'number': $scope.number,
                'message': $scope.message
            };
            console.log('params', params);

            $http.post('/contact/message', params)
                .success(function (data, status, headers, config) {
                    if (data.status == 'OK') {
                        $scope.name = null;
                        $scope.number = null;
                        $scope.email = null;
                        $scope.message = null;
                        $scope.assist = null;

                        $scope.feedback = 'Your form has been sent!';
                    } else {
                        $scope.feedback = 'Oops, we received your request, but there was an error processing it.';
                    }
                })
                .error(function (data, status, headers, config) {
                    $scope.feedback = 'There was a network error. Try again later.';
                })
                .finally(function () {
                    $scope.submitted = false;
                    $timeout(function () {
                        $scope.feedback = null;
                    }, 5000);
                });
        };
    }
]);