myApp.controller("postsController", function (dataService) {
    this.posts = [];
    this.getPosts = function () {
        var self = this;
        dataService.getPosts()
            .then(
                function (data) {
                    self.posts = data;
                },
                function (error) {

                });
    }

})
