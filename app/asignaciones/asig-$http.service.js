(function () {
    'use strict';

    angular
            .module('gasolinaApp')
            .service('AsignacionesService', AsignacionesService);

    AsignacionesService.$inject = ['$http'];
    function AsignacionesService($http) {
        this.all = all;
        this.save = save;

        ////////////////

        var uri = "http://localhost/assign-classroom-server/reservas";

        function all() {
            console.log("get_all");
            var req = $http.get(uri);
            return req;
        }

        function save(registro) {
            console.log("post");
            var req = $http.post(uri, registro);
            return req;
        }
    }
})();