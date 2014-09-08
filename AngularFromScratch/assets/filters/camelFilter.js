myApp.filter("camel", function () {
    return function (input) {
        var out = "";
        var isUpper = true;
        if (input != null && input.length > 0) {
            for (var i = 0; i < input.length; i++) {
                out = out + (isUpper ? input[i].toUpperCase() : input[i].toLowerCase());
                isUpper = input[i] == ' ';
            }
        }

        return out;
    }
});