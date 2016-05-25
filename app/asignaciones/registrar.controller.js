(function () {
    'use strict';

    angular
            .module('gasolinaApp')
            .controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = ['AsignacionesService', 'HorasService', 'SalasService'];
    function RegistrarController(AsignacionesService, HorasService, SalasService) {
        console.log("Entró a RegistrarController");
        var vm = this;

        //Declaraciones de variables en orden alfabético.
        vm.salas = SalasService.getSalas();
        vm.horas = HorasService.getHoras();
        vm.guardar = guardar;

        //Funciones, en orden alfabético
        function activate() {
            vm.asignacion = {};
        }

        function guardar() {
            vm.asignacion.fecha = $('#datepicker').val();
            vm.asignacion.hora_inicio = $('#hora_inicio').val();
            vm.asignacion.hora_fin = $('#hora_fin').val();
            console.log(vm.asignacion);
            //lstorage
            if (AsignacionesService.save(vm.asignacion)) {
                activate();
                vm.respuestaRegistro = "Registró correctamente";
            } else {
                vm.respuestaRegistro = "Error registrando.";
            }
            $("#modalRegistro").modal();
//            DeclaracionesService.save(vm.declaracion)
//                    .then(function (response) {
//                        console.log(response);
//                        activate();
//                        vm.respuestaRegistro = "Registró correctamente";
//                    })
//                    .catch(function (error) {
//                        console.log(error);
//                        vm.respuestaRegistro = error.statusText;
//                    })
//                    .finally(function () {
//                        $("#modalRegistro").modal();
//                    });
        }
        activate();
    }
})();