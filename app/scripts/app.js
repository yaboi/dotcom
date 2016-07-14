'use strict';
/**
 * @ngdoc app
 * @name dotcom
 * @description app for dotcom
 */
angular.module('passionDrivenPortfolio', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'ui.bootstrap',
    'ngFitText',

    'ui.controllers',
    'ui.directives',
    'ui.services'

]).config([
    '$routeProvider',
    '$locationProvider',

    function ($routeProvider, $locationProvider) {
        var routes, setRoutes;
        $locationProvider.html5Mode(true);
        routes = [
            'main', 'traveler', 'developer',
            'resume',
            'adsvise', 'livit', 'negev', 'relivit', 'scalio', 'thedyrt', 'uplabs', 'voray',
            '404', 'main_legacy',
        ];
        setRoutes = function (route) {
            var config, url;
            url = '/' + route;
            config = {
                templateUrl: 'views/' + route + '.html'
            };
            $routeProvider.when(url, config);
            return $routeProvider;
        };
        routes.forEach(function (route) {
            return setRoutes(route);
        });
        return $routeProvider.when('/', {
            redirectTo: '/main'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);