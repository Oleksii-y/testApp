(function(){
'use strict'

angular.module('myApp',['ui.router'])
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home',{
        url:'/',
        templateUrl:'Angular/templates/home.template.html'
    })
    .state('breakfast',{
      url:'/breakfast',
      templateUrl:'Angular/templates/breakfast.template.html',
      controller:'breakfastController'
    })
    .state('lunch',{
      url:'/lunch',
      templateUrl:'Angular/templates/lunch.template.html',
      controller:'lunchController'
    })
    .state('buffet',{
      url:'/buffet',
      templateUrl:'Angular/templates/buffet.template.html',
      controller:'buffetController'
    })
    .state('signUp',{
      url:'/signUp',
      templateUrl:'Angular/templates/signUp.template.html',
      controller:'signUpController'
    })
    .state('info',{
      url:'/info',
      templateUrl:'Angular/templates/info.template.html',
      controller:'infoController'
    })
    .state('aboutUs',{
      url:'/aboutUs',
      templateUrl:'Angular/templates/aboutUs.template.html'
    })
 }


})();
