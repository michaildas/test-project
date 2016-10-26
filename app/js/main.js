'use strict';

angular.module('productsApp', ['ngRoute']);

(function () {
    angular.module('productsApp').controller('NavigationController', ["$scope", function ($scope) {
        $scope.tab = 1;

        $scope.selectTab = function (setTab) {
            $scope.tab = setTab;
        };

        $scope.isSelected = function (checkTab) {
            return $scope.tab === checkTab;
        };
    }]).controller('ProductsController', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        //pagination
        $scope.currentPage = 0;
        $scope.itemsPerPage = 50;
        $scope.orderKey = undefined;
        $scope.orderKeyNum = -1;
        $scope.items = [];
        $scope.tableStructure = {};
        $scope.tableStructureKeys = [];

        function sort(a, b) {
            if (a[$scope.orderKeyNum] > b[$scope.orderKeyNum]) {
                return 1;
            } else {
                return -1;
            }
        }

        $scope.order = function (key) {
            if ($scope.orderKey == key) {
                $scope.items.reverse();
            } else {
                $scope.orderKey = key;
                for (var i = 0; i < $scope.tableStructureKeys.length; i++) {
                    if ($scope.tableStructureKeys[i] == key) {
                        $scope.orderKeyNum = i;
                        break;
                    }
                }
                $scope.items.sort(sort);
            }
        };
        $http.get('../../products.json').success(function (data) {
            $scope.items = data;
            $scope.tableStructure = $scope.items.splice(0, 1)[0];
            $scope.tableStructureKeys = Object.keys($scope.tableStructure);
        });

        $scope.firstPage = function () {
            return $scope.currentPage <= 0;
        };
        $scope.lastPage = function () {
            var inputValue = angular.element(document.querySelector(".search__input")).val();
            var lastPageNum = void 0;
            if (inputValue != undefined && inputValue != "") {
                lastPageNum = Math.ceil($scope.fliteredData.length / $scope.itemsPerPage - 1);
            } else {
                lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
            }

            return $scope.currentPage == lastPageNum;
        };

        $scope.numberOfPages = function () {
            var inputValue = angular.element(document.querySelector(".search__input")).val();
            if (inputValue != undefined && inputValue != "") {

                if ($scope.fliteredData.length == 0) {
                    $scope.currentPage = -1;
                    return 0;
                } else {
                    $scope.currentPage = 0;
                }
                return Math.ceil($scope.fliteredData.length / $scope.itemsPerPage);
            } else {
                return Math.ceil($scope.items.length / $scope.itemsPerPage);
            }
        };

        $scope.startingItem = function () {
            return $scope.currentPage * $scope.itemsPerPage;
        };
        $scope.pageBack = function () {
            $scope.currentPage = $scope.currentPage - 1;
        };
        $scope.pageForward = function () {
            $scope.currentPage = $scope.currentPage + 1;
        };
    }]).filter('startFrom', function () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        };
    });
})();
(function () {
    angular.module('productsApp').directive("products", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/products.html",
            controller: "ProductsController",
            controllerAs: "productsCtrl"
        };
    }).directive("demo", function () {
        return {
            restrict: "E",
            templateUrl: "/templates/demo.html",
            controller: "ProductsController",
            controllerAs: "productsCtrl"
        };
    });
})();
(function () {
    angular.module('productsApp').config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/pages/products/index.html'
        }).when('/products', {
            templateUrl: '/pages/products/index.html'
        }).when('/demo', {
            templateUrl: '/pages/demo/index.html'
        }).otherwise({ redirectTo: "/" });
    });
})();