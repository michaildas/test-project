app.controller("tableController", ["$scope", "GetTableData", function ($scope, GetTableData) {
    this.var = "asdasd";
    $scope.tableData = GetTableData.get();

    GetTableData.get().then(function (res) {
        console.log(res);
    });

    // $scope.tableStructure = $scope.tableData.splice(0, 1)[0];
}]);
