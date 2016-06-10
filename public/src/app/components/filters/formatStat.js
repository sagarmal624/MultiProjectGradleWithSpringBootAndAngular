(function () {
    'use strict';
    angular.module('app').filter('formatStat', [function () {
        return function (hostItem, statKey) {
            if (hostItem) {
                if (statKey.formatter) {
                    return statKey.formatter(hostItem);
                } else {
                    return hostItem.lastValue;
                }
            } else {
                return "NA"
            }
        };
    }])
})();
