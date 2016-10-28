"use strict";

var app = angular.module('productsApp', []);
app.controller("tableController", ["$scope", "GetTableData", function ($scope, GetTableData) {
    this.var = "asdasd";
    $scope.tableData = GetTableData.get();

    GetTableData.get().then(function (res) {
        console.log(res);
    });

    // $scope.tableStructure = $scope.tableData.splice(0, 1)[0];
}]);

app.directive("myTable", [function () {
    return {
        restrict: "E",
        templateUrl: "/templates/my-table.html",
        scope: {
            tableData: "=",
            tableStructure: "="
        },
        link: function link(scope) {
            console.log(scope.tableData);
            scope.currentPage = 0;
            scope.itemsPerPage = 15;
            scope.items = scope.tableData;
            scope.propertyName = "id";
            scope.property = "0";
            scope.reverse = true;
            scope.structureKeys = Object.keys(scope.tableData);
            scope.sortBy = function (property) {
                scope.propertyName = scope.tableStructureKeys[property];
                property = property.toString();
                scope.reverse = scope.property === property ? !scope.reverse : false;
                scope.property = property;
            };

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
                if (scope.searchText != undefined && scope.searchText != "") {

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
app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});

app.factory("GetTableData", ["$http", "$q", function ($http, $q) {

    function get() {
        var q = $q.defer();

        $http.get('../../products.json').success(function (data) {
            q.resolve(data);
        });

        return q.promise;
    }

    return {
        get: get
    };
}]);