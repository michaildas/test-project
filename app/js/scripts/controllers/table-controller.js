app.controller("tableController", ["$scope", "GetTableData", function ($scope, GetTableData) {

    /*$scope.tableData= [
    {"id": "Идентификатор", "name": "Название",  "price": "Стоимость", "quantity": "Количество"},
        [ 1, "банан", "400", 5 ],
    [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "205", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ]];
    $scope.tableStructure = $scope.tableData.splice(0, 1)[0];*/
    GetTableData.get().then(function (res) {
        $scope.tableData = res;
        $scope.tableStructure = $scope.tableData.splice(0, 1)[0];
    });
}]);
