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
            scope.currentPage = 0;
            scope.itemsPerPage = 50;
            scope.items = scope.tableData;
            scope.propertyName = "id";
            scope.property = "0";
            scope.reverse = true;
            scope.tableStructureKeys = Object.keys(scope.tableStructure);
            scope.sortBy = function(property) {
                scope.propertyName = scope.tableStructureKeys[property];
                property = property.toString();
                scope.reverse = (scope.property === property) ? !scope.reverse : false;
                scope.property = property;
            };

            scope.lastPage = function() {
                let lastPageNum;
                if (scope.searchText != undefined && scope.searchText != "" ) {
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
        }
    }
}]);