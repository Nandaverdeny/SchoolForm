var app = angular.module("RDash", [
    "ui.bootstrap",
    "ui.router",
    "oc.lazyLoad",
    "common.services", 
    "dndLists",
    "formly",
    "formlyBootstrap",
    "ds.clock",
    "ngMaterial",
    "ui.calendar"]);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            
            .state('user-index', {
                url: '/user-index',
                templateUrl: '/javascripts/angular-assets/partialviews/users/Index.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/javascripts/angular-assets/partialviews/users/login.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/javascripts/angular-assets/partialviews/users/register.html'
            })
            .state('home', {
                    url: '/home',
                    templateUrl: '/javascripts/angular-assets/partialviews/home.html'
            })

            .state('profile-setting', {
                    url: '/profile-setting',
                    templateUrl: '/javascripts/angular-assets/partialviews/profile/profile-setting.html'
            })
            .state('profile-index', {
                    url: '/profile-index',
                    templateUrl: '/javascripts/angular-assets/partialviews/profile.html'

            })
            ;
    }
]);