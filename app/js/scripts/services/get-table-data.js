app.factory("GetTableData", ["$http", "$q", function ($http, $q) {


    function get() {
        var q = $q.defer();

        $http.get('../../products.json')
            .success(function (data) {
                q.resolve(data);
            });

        return q.promise;
    }


    return {
        get: get
    }
}]);
