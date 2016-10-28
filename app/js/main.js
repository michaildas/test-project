'use strict';

var app = angular.module('productsApp', []);
app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});

app.directive("myTable", ["$http", function ($http) {
    return {
        restrict: "E",
        templateUrl: "/templates/my-table.html",
        link: function link(scope) {
            scope.currentPage = 0;
            scope.itemsPerPage = 50;
            scope.items = [];
            scope.tableData = {};
            scope.tableStructureKeys = [];
            scope.propertyName = null;
            scope.property = "0";
            scope.reverse = true;

            scope.sortBy = function (property) {
                scope.propertyName = scope.tableStructureKeys[property];
                property = property.toString();
                scope.reverse = scope.property === property ? !scope.reverse : false;
                scope.property = property;
            };

            $http.get('../../products.json').success(function (data) {
                scope.items = data;
                scope.tableData = scope.items.splice(0, 1)[0];
                scope.tableStructureKeys = Object.keys(scope.tableData);
                scope.propertyName = scope.tableStructureKeys[0];
            });

            scope.firstPage = function () {
                return scope.currentPage <= 0;
            };
            scope.lastPage = function () {
                var inputValue = angular.element(document.querySelector(".search__input")).val();
                var lastPageNum = void 0;
                if (inputValue != undefined && inputValue != "") {
                    lastPageNum = Math.ceil(scope.fliteredData.length / scope.itemsPerPage - 1);
                } else {
                    lastPageNum = Math.ceil(scope.items.length / scope.itemsPerPage - 1);
                }

                return scope.currentPage == lastPageNum;
            };

            scope.numberOfPages = function () {
                var inputValue = angular.element(document.querySelector(".search__input")).val();
                if (inputValue != undefined && inputValue != "") {

                    if (scope.fliteredData.length == 0) {
                        scope.currentPage = -1;
                        return 0;
                    } else {
                        scope.currentPage = 0;
                    }
                    return Math.ceil(scope.fliteredData.length / scope.itemsPerPage);
                } else {
                    return Math.ceil(scope.items.length / scope.itemsPerPage);
                }
            };

            scope.startingItem = function () {
                return scope.currentPage * scope.itemsPerPage;
            };
            scope.pageBack = function () {
                scope.currentPage = scope.currentPage - 1;
            };
            scope.pageForward = function () {
                scope.currentPage = scope.currentPage + 1;
            };
        }
    };
}]);