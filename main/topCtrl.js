var top250 = angular.module("app.top250",[]);
top250.controller('topCtrl', ['$scope','$http', function ($scope,$http) {
    $.ajax({
        url: 'https://api.douban.com/v2/movie/top250',
        type: 'gat',
        dataType: 'jsonp',
           data: {
               // count:100
           },
        success: function (data) {
            console.log(data);
            $scope.$apply(function () {
                $scope.title = data.title;
                $scope.song = data.subjects;
            })
            if(data.count > 20){
                console.log(111);
            }
        }
    })


}])