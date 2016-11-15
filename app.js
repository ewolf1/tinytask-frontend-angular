/**
 * Created by Karsten on 08.11.2016.
 */
angular.module('tinytask', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', { templateUrl: 'components/login.html'})
            .when('/register', { templateUrl: 'components/register.html'})
            .when('/start', {templateUrl: 'components/start.html'})
			.when('/profile', {templateUrl: 'components/profile.html'})
            .otherwise({ redirectTo: '/'});
    })

    .controller('LoginCtrl', function($scope, $http){
        $http.get('welcome.json').then(function(welcomeResponse){
            $scope.welcome = welcomeResponse.data;
        });
    })

    .controller('StartCtrl', function($scope, $http){
        $http.get('mytasks.json').then(function(mytasksResponse){
            $scope.mytasks = mytasksResponse.data;
        })
    });