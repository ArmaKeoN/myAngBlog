'use strict';

myAngBlog.controller('DetailCtrl', function ($scope, $http, $routeParams) {

    $scope.blog;

    $http({ method: 'GET', url: 'https://radiant-fire-4799.firebaseio.com/' + $routeParams.id + '.json' })
    .success(function (data) {
        $scope.blog = data;
    })
    .error(function (data) {
        console.log('Error obtaining ' + data);
    })

    $scope.editBlog = function () {
        //new comment
        //$scope.blog.Title = $scope.Title;
        //$scope.blog.Message = $scope.Message;

        //$scope.executeEdit = function () {
        var editedBlog = {};
        editedBlog = {
            Title: document.getElementById('Title').value,
            Message: document.getElementById('Message').value,
            Time: $scope.blog.Time
        };

        $http.put('https://radiant-fire-4799.firebaseio.com/' + $routeParams.id + '.json', editedBlog)
            .success(function () {
                console.log(status);
            })
            .error(function (status) {
                console.log('Error: ' + status);
            });
    };
    //};
});