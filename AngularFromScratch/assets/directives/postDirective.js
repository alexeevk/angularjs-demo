myApp.directive('blogPost', function () {
    return {
        // Possible restrictions are
        // E - matches html element
        // A - matches attribute name
        // C - matches class name
        // combinations are possible 
        restrict: 'E',
        scope: {
            blogItem: '=posting',   // = syntax means that posting is an attribute
            message: '@',           // @ is to just pass a value
            action: "&",            // & is used for actions
        },
        templateUrl: '/assets/views/post.html',

    };
});