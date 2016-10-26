(function(){
angular.module('productsApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl: '/pages/products/index.html'
                }
            )
            .when('/products', {
                    templateUrl: '/pages/products/index.html'
                }
            )
            .when('/demo', {
                    templateUrl: '/pages/demo/index.html'
                }
            )
            .otherwise({redirectTo: "/"})
    });
})();
