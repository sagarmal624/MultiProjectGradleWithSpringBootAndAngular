'use strict';

angular.module('angularMaterialAdmin',
    ['ngCookies', 'ngSanitize', 'ui.router', 'angularMoment', 'app'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/views/main.html',
                abstract: true
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'app/views/dashboard.html',
                controllerAs: 'vmDash'
            })
            .state('home.memoryExtensiveTask', {
                url: '/memoryStat',
                templateUrl: 'app/views/memoryStat.html',
                controllerAs: 'vmMem'
            })
            .state('home.cpuExtensiveTask', {
                url: '/cpuStat',
                templateUrl: 'app/views/cpuStat.html',
                controllerAs: 'vmCpu'
            })
            .state('home.rdsExtensiveTask', {
                url: '/rdsStat',
                templateUrl: 'app/views/rdsStat.html',
                controllerAs: 'vmRds'
            })
            .state('home.systemConfig', {
                url: '/systemConfig',
                templateUrl: 'app/views/systemConfig.html',
                controller: 'SystemConfigController',
                controllerAs: 'vm'
            })
            .state('home.aboutUs', {
                url: '/aboutUs',
                templateUrl: 'app/views/aboutUs.html'
            });
        $urlRouterProvider.otherwise('/dashboard');
    });
