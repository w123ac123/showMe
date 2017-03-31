var message = angular.module("app.message",[]);
message.controller('messageCtrl', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
    // console.log($routeParams.xID);
    $.ajax({
        url: 'https://api.douban.com/v2/movie/subject/'+$routeParams.xID,
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
                $scope.song = data;
            })
        }
    })
}])