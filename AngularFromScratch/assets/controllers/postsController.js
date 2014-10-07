myApp.controller("postsController", function (dataService) {
    this.posts = [];
    this.controllersScopeMessage = 'this is custom post message';
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

    this.postClicked = function(posting) {
        alert(posting.title);
    }

})
