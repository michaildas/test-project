'use strict';
angular.module('productsApp', ['ngRoute']);

(function () {
    angular.module('productsApp')
        .controller('NavigationController', ["$scope", function ($scope) {
            $scope.tab = 1;

            $scope.selectTab = function (setTab) {
                $scope.tab = setTab;
            };

            $scope.isSelected = function (checkTab) {
                return $scope.tab === checkTab;
            };
        }])

        .controller('ProductsController', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
           //pagination
            $scope.currentPage = 0;
            $scope.itemsPerPage = 50;
            $scope.orderKey = undefined;
            $scope.orderKeyNum = -1;
            $scope.items = [];
            $scope.tableStructure = {};
            $scope.tableStructureKeys = [];


            function sort (a,b) {
                if (a[$scope.orderKeyNum] > b[$scope.orderKeyNum]) {
                    return 1;
                }
                else {
                    return -1;
                }
            }

            $scope.order = function(key) {
                if ($scope.orderKey == key) {
                    $scope.items.reverse();
                }
                else {
                    $scope.orderKey = key;
                    for (let i = 0; i < $scope.tableStructureKeys.length; i++) {
                        if ($scope.tableStructureKeys[i] == key) {
                            $scope.orderKeyNum = i;
                            break;
                        }
                    }
                    $scope.items.sort(sort);
                }
            };
            $http.get('../../products.json')
                .success(function (data) {
                    $scope.items = data;
                    $scope.tableStructure = $scope.items.splice(0,1)[0];
                    $scope.tableStructureKeys = Object.keys($scope.tableStructure);
                });

            $scope.firstPage = function() {
                return $scope.currentPage == 0;
            };
            $scope.lastPage = function() {
                let inputValue = angular.element(document.querySelector (".search__input")).val();
                let lastPageNum;
                if (inputValue != undefined && inputValue != "" ) {
                    lastPageNum = Math.ceil($scope.searchText.length / $scope.itemsPerPage - 1);
                } else {
                    lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
                }

                return $scope.currentPage == lastPageNum;
            };

            $scope.numberOfPages = function(){
                let inputValue = angular.element(document.querySelector (".search__input")).val();
                if (inputValue != undefined && inputValue != "") {
                     return Math.ceil($scope.searchText.length / $scope.itemsPerPage);
                } else {
                    return Math.ceil($scope.items.length / $scope.itemsPerPage);
                }
            };

            $scope.startingItem = function() {
                return $scope.currentPage * $scope.itemsPerPage;
            };
            $scope.pageBack = function() {
                $scope.currentPage = $scope.currentPage - 1;
            };
            $scope.pageForward = function() {
                $scope.currentPage = $scope.currentPage + 1;
            };
        }])

        .filter('startFrom', function(){
            return function(input, start){
                start = +start;
                return input.slice(start);
            }
        })

})();