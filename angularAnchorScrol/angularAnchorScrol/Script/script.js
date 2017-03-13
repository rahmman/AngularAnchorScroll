﻿/// <reference path="angular.min.js" />
var demoApp = angular.module("myModule", [])
.controller("countryController",
function ($scope, $location, $anchorScroll, $http) {
    $http.get("CountryService.asmx/GetData")
    .then(function (response) {
        $scope.countries = response.data;
    });
    $scope.scrollTo = function (countryName) {
        $location.hash(countryName);
        $anchorScroll();
    }
});