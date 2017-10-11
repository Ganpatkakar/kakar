var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {

    $routeProvider
        .when("/chart", {
            templateUrl: "chart.html",
            controller: "chartController"
        })
        .when("/calendar", {
            templateUrl: "calendar.html",
            controller: "calendarController"
        })
        .when("/blank", {
            templateUrl: "blank.htm"
        })
        .when("/404", {
            templateUrl: "404.htm"
        })
        .when("/login", {
            templateUrl: "login.htm"
        })
        .when("/signup", {
            templateUrl: "signup.htm"
        })
        .when("/profile", {
            templateUrl: "profile.htm"
        })
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        });
});
app.controller("homeController", function ($scope) {
    $scope.page_controller = "Home";
});

app.controller("chartController", function ($scope) {
    $scope.pageName = "ChartJs";
});

app.controller("calendarController", function ($scope) {
    $scope.pageName = "Calendar JS";
});
