myApp.controller("indexController", function (dataService, $scope) {
    this.person = { name: "Adam Smith" };
    this.book = { title: "The Theory of Moral Sentiments" };

    $scope.$watch("model.person.name", function (newValue, oldValue) {
        $scope.myCss = (newValue != null && newValue.toLowerCase() == "konstantin alexeyev");
    });

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
