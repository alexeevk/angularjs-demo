var myApp = angular.module("angularDemo", ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/posts', { templateUrl: '/assets/views/posts.html', controller: 'postsController' })
                .when('/person', { templateUrl: '/assets/views/person.html', controller: 'personController' })
                .otherwise({ redirectTo: '/person' });
    }]);
