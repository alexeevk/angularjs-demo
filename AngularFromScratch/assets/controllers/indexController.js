myApp.controller("indexController", function (dataService, $scope) {
    this.person = { name: "Adam Smith" };
    this.book = { title: "The Theory of Moral Sentiments" };

    $scope.$watch("model.person.name", function (newValue, oldValue) {
        if (newValue != null && newValue.toLowerCase() == "konstantin alexeyev") {
            $scope.myCss = "thePerson";
            return;
        }

        $scope.myCss = null;
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
