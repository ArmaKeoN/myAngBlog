'use strict';

myAngBlog.controller('AddCtrl', function ($scope, $http, $location) {

    $scope.addNewBlog = function () {

        var blog = function (Title, Message, Time) {
            this.Title = Title;
            this.Message = Message;
            this.Time = Time;
        };

        var newBlog = new blog();

        newBlog.Title = $scope.Title;
        newBlog.Message = $scope.Message;
        newBlog.Time = new Date(Date.now()).toString();

        $http.post('https://radiant-fire-4799.firebaseio.com/.json', newBlog )
        .success(function (status) {
            console.log(status);
            $location.path('/');
        })
        .error(function (status) {
            console.log('Error: ' + status);
        })

        $scope.Title = '';
        $scope.Message = '';
    };
});