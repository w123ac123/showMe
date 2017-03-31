var future = angular.module("app.future",[]);
future.controller('futureCtrl', ['$scope','$http', function ($scope,$http) {
    $.ajax({
        url: 'https://api.douban.com/v2/movie/coming_soon',
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