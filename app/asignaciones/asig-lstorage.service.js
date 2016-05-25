//Almacena usando el servicio $localStorage de ngStorage.
(function () {
    'use strict';

    angular
            .module('gasolinaApp')
            .service('AsignacionesService', AsignacionesService);

    AsignacionesService.$inject = ['$localStorage'];
    function AsignacionesService($localStorage) {
        var ls = $localStorage.$default({asignaciones: []});
        this.all = all;
        this.save = save;

        function all() {
            return ls.asignaciones;
        }

        function save(asignacion) {
            //Retorna true o false, si guardó o no, respectivamente.
            var cantidadAnterior = ls.asignaciones.length;
            var cantidadNueva = ls.asignaciones.push(asignacion);
            return cantidadAnterior < cantidadNueva;
        }
    }
})();