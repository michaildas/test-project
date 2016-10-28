app.directive("myTable", [
    function () {
    return {
        restrict: "E",
        templateUrl: "/templates/my-table.html",
        scope: {
            tableData: "=",
            tableStructure: "="
        },
        link: function(scope) {
            console.log(scope.tableData);
            scope.currentPage = 0;
            scope.itemsPerPage = 15;
            scope.items = scope.tableData;
            scope.propertyName = "id";
            scope.property = "0";
            scope.reverse = true;
            scope.structureKeys = Object.keys(scope.tableData);
            scope.sortBy = function(property) {
                scope.propertyName = scope.tableStructureKeys[property];
                property = property.toString();
                scope.reverse = (scope.property === property) ? !scope.reverse : false;
                scope.property = property;
            };

            scope.firstPage = function() {
                return scope.currentPage <= 0;
            };
            scope.lastPage = function() {
                let inputValue = angular.element(document.querySelector (".search__input")).val();
                let lastPageNum;
                if (inputValue != undefined && inputValue != "" ) {
                    lastPageNum = Math.ceil(scope.fliteredData.length / scope.itemsPerPage - 1);
                } else {
                    lastPageNum = Math.ceil(scope.items.length / scope.itemsPerPage - 1);
                }

                return scope.currentPage == lastPageNum;
            };

            scope.numberOfPages = function(){
                if (scope.searchText != undefined && scope.searchText != "") {

                    if (scope.fliteredData.length==0) {
                        scope.currentPage = -1;
                        return 0;
                    }
                    else {
                        scope.currentPage = 0;
                    }
                    return Math.ceil(scope.fliteredData.length / scope.itemsPerPage);
                } else {
                    return Math.ceil(scope.items.length / scope.itemsPerPage);
                }
            };

            scope.startingItem = function() {
                return scope.currentPage * scope.itemsPerPage;
            };
            scope.pageBack = function() {
                scope.currentPage = scope.currentPage - 1;
            };
            scope.pageForward = function() {
                scope.currentPage = scope.currentPage + 1;
            };
        }
    }
}]);