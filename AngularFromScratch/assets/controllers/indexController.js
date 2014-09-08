myApp.controller("indexController", function (dataService) {
    this.person = { name: "Adam Smith" };
    this.book = { title: "The Theory of Moral Sentiments" };

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
