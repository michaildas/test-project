app.controller("tableController", ["$scope", "GetTableData", function ($scope, GetTableData) {

    $scope.tableData= [
        {"id": "Идентификатор", "name": "Название",  "price": "Стоимость", "quantity": "Количество"},
        [ 1, "банан", "400", 5 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "205", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 22, "батон", "222", 9 ],
        [ 1, "банан", "400", 5 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ],
        [ 2, "арбуз", "300", 6 ],
        [ 3, "помидор", "200", 7 ],
        [ 4, "ручка", "500", 1 ],
        [ 5, "карандаш", "600", 2 ],
        [ 6, "дыня", "700", 3 ],
        [ 7, "мышка", "400", 4 ],
        [ 8, "кнопка", "300", 5 ],
        [ 9, "кошка", "200", 6 ],
        [ 10, "ноутбук", "500", 7 ],
        [ 11, "телевизор", "600", 1 ],
        [ 12, "открытка", "700", 2 ],
        [ 13, "попугай", "400", 3 ],
        [ 14, "гипопотам", "300", 4 ],
        [ 15, "али-баба", "200", 5 ],
        [ 16, "модем", "500", 6 ],
        [ 17, "шкаф", "600", 7 ],
        [ 18, "свитер", "700", 1 ],
        [ 19, "блок", "400", 2 ],
        [ 20, "сигара", "300", 3 ],
        [ 21, "стол", "200", 4 ]
    ];
    $scope.tableStructure = $scope.tableData.splice(0, 1)[0];
    /*GetTableData.get().then(function (res) {
        $scope.tableData = res;
        $scope.tableStructure = $scope.tableData.splice(0, 1)[0];
    });*/
}]);
