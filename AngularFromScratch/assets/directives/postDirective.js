myApp.directive('blogPost', function() {
    return {
        template: '<div>Title: <b>{{post.title}}</b></div><div>{{post.body}}</div>'
    };
});