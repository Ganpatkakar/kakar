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
            templateUrl: "blank.html"
        })
        .when("/404", {
            templateUrl: "404.html"
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

app.controller("calendarController", ['$scope', '$document', '$compile',  function ($scope, $document, $compile) {
    $scope.pageName = "Calendar JS";
    $scope.eventData = [];
    $scope.editEventS = false;
    $scope.showEventpopup = false;
    $scope.dataTime = new Date();

    $scope.iseventRegistered = function () {
        for (var i = 0; i < $scope.eventData.length; i++) {
             var ab = $document.find("[data-id='"+$scope.eventData[i].eventDate+"']");
             ab.addClass("event-registered");
        }
    };

    $scope.iseventRegistered();

    $scope.nextPrevMonth = function(){
        var $el = $document.find("[id='calendar']");
        $compile($el)($scope);
        $scope.iseventRegistered();
    };

    $scope.assignEvent = function (item) {
        $scope.eventDate = $(angular.element(item)[0]).data('id');
        $scope.showEventpopup = true;
        $scope.dataTime = $scope.eventDate + " 00:00:00 AM";
        $scope.eventVal = "";
    };

    $scope.submitEvent = function () {
        if ($scope.eventForm.$valid) {
            var currentEventVal = {
                "eventDate": $scope.eventDate,
                "eventTime": $scope.dataTime,
                "eventDetail": $scope.eventVal
            };
            $scope.eventData.push(currentEventVal);
            console.log($scope.eventData);
            $scope.showEventpopup = false;
            $scope.iseventRegistered();
        }
    };
}]);
