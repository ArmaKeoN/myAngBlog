'use strict';

myAngBlog.controller('ListCtrl', function ($scope, $http, $route) {

    $scope.blogs = [];

    $http({ method: 'GET', url: 'https://radiant-fire-4799.firebaseio.com/.json' })
    .success(function (data) {
        for (var blog in data) {
            //$scope.blogId.push(blog);
            $scope.blogs.push(
                {
                    Id: blog,
                    Title: data[blog].Title,
                    Message: data[blog].Message,
                    Time: data[blog].Time
                });
        }
    })
    .error(function (data) {
        console.log('Error obtaining ' + data);
    });

    $scope.delBlog = function (id) {
        $http({ method: 'DELETE', url: 'https://radiant-fire-4799.firebaseio.com/' + id + '.json' })
        .success(function (status) {
            console.log(status);
            $route.reload();
        })
        .error(function (status) {
            console.log('Error: ' + status);
        });
    };
});