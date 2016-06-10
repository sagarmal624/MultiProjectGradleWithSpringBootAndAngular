(function () {
    'use strict';
    angular.module('app').filter('bytes', [function () {
        return function (bytes, precision, unit) {
            if (bytes == 0)return bytes;
            if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return 'NA';
            if (typeof precision === 'undefined') precision = 1;
            var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
                number = Math.floor(Math.log(bytes) / Math.log(1024));
            if (unit != 0) {
                var index = units.indexOf(unit);
                if (index > number) {
                    var res = (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision);
                    return (res / Math.pow(1024, Math.floor(index - number))).toFixed(precision) + ' ' + unit;
                }
            }
            return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
        }
    }])
})();
