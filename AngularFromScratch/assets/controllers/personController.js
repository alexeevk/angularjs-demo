myApp.controller("personController", function ($scope) {
    this.person = { name: "Adam Smith" };
    this.book = { title: "The Theory of Moral Sentiments" };

    $scope.$watch("model.person.name", function (newValue, oldValue) {
        $scope.isThePerson = (newValue != null && newValue.toLowerCase() == "konstantin alexeyev");
    });
})
