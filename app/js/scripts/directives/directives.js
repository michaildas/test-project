(function () {
    angular.module('productsApp')
        .directive("myTable",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/my-table/index.html",
                controller: "ProductsController",
                controllerAs: "productsCtrl"
            }
        })
})();