(function () {
    'use strict';
    angular.module('app', ['ngResource', 'ngLodash', 'ui.bootstrap'])
        .config(['$resourceProvider', function ($resourceProvider) {
            $resourceProvider.defaults.stripTrailingSlashes = false;
        }])
        .service("Configuration", [function () {
            if (/localhost:3000/.test(window.location.host)) {
                return this.API = 'http://localhost:8080';
            } else {
                return this.API = '';
            }
        }]);
})();