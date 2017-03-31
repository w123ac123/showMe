var hot = angular.module("app.hot",[]);
hot.controller('hotCtrl', ['$scope','$http', function ($scope,$http) {
    $.ajax({
        url: 'https://api.douban.com/v2/movie/in_theaters',
        type: 'gat',
        dataType: 'jsonp',
//            data: {
//                method : 'baidu.ting.billboard.billList',
//                type : 21,
//                size : 15,
//                offset : 0
//            },
        success: function (data) {
            console.log(data);
            $scope.$apply(function () {
                $scope.title = data.title;
                $scope.song = data.subjects;
            })
        }
    })
}])