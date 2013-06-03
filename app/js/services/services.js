'use strict';

app.factory('beerService', function($http) {
    var myService = {
        async: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('http://api.brewerydb.com/v2/styles?key=38dc0f6bc1dc4cad094acc6f4e2f82d8').then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return myService;
});
