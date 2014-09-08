myApp.service("dataService", function ($http, $q) {

    // http://jsonplaceholder.typicode.com/posts
    // http://jsonplaceholder.typicode.com/photos
    var createRequest = function (url) {
        return {
            url: url,
            method: "GET",
            "Content-Type": "application/json; charset=utf-8",
            "X-Requested-With": "XMLHttpRequest"
        }
    };

    return {
        getPosts: function () {
            var deferred = $q.defer();
            var getPosts = createRequest("http://jsonplaceholder.typicode.com/posts");

            $http(getPosts)
                .success(
                    function (response) {
                        deferred.resolve(response);
                    })
                .error(
                    function (error, statusCode) {
                        deferred.reject(error);
                    });

            return deferred.promise;
        }
    }
})
