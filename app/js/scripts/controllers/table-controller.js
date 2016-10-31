app.controller("tableController", ["$scope", "GetTableData", function ($scope, GetTableData) {
    GetTableData.get().then(function (res) {
        $scope.tableData = res;
        $scope.tableStructure = $scope.tableData.splice(0, 1)[0];
    });
}]);
