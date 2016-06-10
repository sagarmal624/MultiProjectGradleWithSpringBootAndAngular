(function () {
    'use strict';
    angular.module('app').filter('stringify', ['lodash', function (lodash) {
        return function (obj) {
            var renderHtml = "";
            lodash.forEach(obj, function (value, key) {
                renderHtml += "<div style='margin:5px 0;'>" + key + ": <b>" + value + "</b></div>";
            });
            return renderHtml;
        };
    }])
})();
