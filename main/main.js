var app = angular.module("myApp",["ngRoute","app.hot","app.future","app.top250","app.message"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl:"main/hotCtrl.html",
        controller:"hotCtrl"
    }).when('/future',{
        templateUrl:"main/futureCtrl.html",
        controller:"futureCtrl"
    }).when('/top',{
        templateUrl:"main/topCtrl.html",
        controller:"topCtrl"
    }).when('/message/:xID',{
        templateUrl:"main/messageCtrl.html",
        controller:"messageCtrl"
    }).otherwise({
        redirectTo:"/"
    })

}])
