'use strict';

var myAngBlog = angular.module('myBlog', ['ngRoute']);

myAngBlog.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/ListBlogs.html',
                controller: 'ListCtrl'
            }).
            when('/detailblog/:id', {
                templateUrl: 'Views/DetailBlog.html',
                controller: 'DetailCtrl'
            }).
            when('/addblog/', {
            templateUrl: 'Views/AddBlog.html',
            controller: 'AddCtrl'
        })
            .otherwise({ redirectTo: '/' });
    }]);