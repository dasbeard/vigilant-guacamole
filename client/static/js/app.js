//==================== Creating Angular App ====================
var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

//==================== Angular Routes ====================
app.config(function($routeProvider){
  $routeProvider

    .when('/', {
      templateUrl: 'static/partials/home.html',
      controller: 'homeController'
    })
    .when('/home', {
      templateUrl: 'static/partials/home.html',
      controller: 'homeController'
    })
    .when('/new', {
      templateUrl: 'static/partials/newQuestion.html',
      controller: 'questionController'
    })
    .when('/vote', {
      templateUrl: 'static/partials/vote.html',
      controller: 'voteController'
    })

    .otherwise({
      redirectTo: '/'
    })
});
