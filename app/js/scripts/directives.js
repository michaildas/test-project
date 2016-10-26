(function () {
    angular.module('productsApp')
        .directive("products",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/products.html",
                controller: "ProductsController",
                controllerAs: "productsCtrl"
            }
        })

        .directive("demo",function() {
            return {
                restrict: "E",
                templateUrl: "/templates/demo.html",
                controller: "ProductsController",
                controllerAs: "productsCtrl"
            }
        })
})();