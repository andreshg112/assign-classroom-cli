(function () {
    'use strict';

    angular
            .module('gasolinaApp')
            .controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = ['AsignacionesService', 'HorasService', 'SalasService'];
    function RegistrarController(AsignacionesService, HorasService, SalasService) {
        console.log("Entró a RegistrarController");
        var vm = this;

        //Declaraciones de variables públicas en orden alfabético.
        vm.asignaciones = [];
        vm.cancelarAsignacion = cancelarAsignacion;
        vm.guardar = guardar;
        vm.horas = HorasService.getHoras();
        vm.limpiar = limpiar;
        vm.salas = SalasService.getSalas();

        //Funciones, en orden alfabético
        function activate() {
            vm.limpiar();
            cargarAsignaciones();
        }

        function cargarAsignaciones() {
            AsignacionesService.getAll()
                    .then(function (response) {
                        vm.asignaciones = response.data.result;
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert(error.statusText);
                    });
        }

        function cancelarAsignacion(asignacion) {
            AsignacionesService.delete(asignacion)
                    .then(function (response) {
                        console.log(response);
                        activate();
                        vm.modalRespuesta = response.data.mensaje;
                    })
                    .catch(function (error) {
                        console.log(error);
                        vm.modalRespuesta = error.statusText;
                    })
                    .finally(function () {
                        $("#modalRegistro").modal();
                    });
        }

        function guardar() {
            vm.asignacion.fecha = $('#datepicker').val();
            vm.asignacion.hora_inicio = $('#hora_inicio').val();
            vm.asignacion.hora_fin = $('#hora_fin').val();
            console.log(vm.asignacion);
            AsignacionesService.post(vm.asignacion)
                    .then(function (response) {
                        console.log(response);
                        activate();
                        vm.modalRespuesta = response.data.mensaje;
                    })
                    .catch(function (error) {
                        console.log(error);
                        vm.modalRespuesta = error.statusText;
                    })
                    .finally(function () {
                        $("#modalRegistro").modal();
                    });
        }

        function limpiar() {
            vm.asignacion = {};
            $('#hora_inicio').val("");
            $('#hora_fin').val("");
        }
        activate();
    }
})();