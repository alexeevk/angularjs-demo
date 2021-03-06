﻿myApp.directive('currentTime', ['$interval', 'dateFilter', function ($interval, dateFilter) {

    // scope - angular scope service
    // element - directive's HTML element (to whatever it matches)
    // attrs - list of attributes applied to the directive
    function link(scope, element, attrs) {
        var format,
            timeoutId;

        function updateTime() {
            element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.format, function (value) {
            format = value;
            updateTime();
        });

        // listen for $destroy that is sent when scope is destroyed
        // listeners registred on elements are destoyed automatically, but
        // if we do custom listeners on services we have to destroy it explicitly
        element.on('$destroy', function () {
            $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function () {
            updateTime(); // update DOM
        }, 1000);
    }

    return {
        link: link,
        restrict: 'E'
    };
}]);