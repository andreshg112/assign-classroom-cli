(function () {
    'use strict';

    angular
            .module('gasolinaApp')
            .controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = ['DeclaracionesService', 'HorasService', 'SalasService'];
    function RegistrarController(DeclaracionesService, HorasService, SalasService) {
        console.log("Entró a RegistrarController");
        var vm = this;

        //Declaraciones de variables en orden alfabético.
        vm.salas = SalasService.getSalas();
        vm.calcular = calcular;
        vm.horas = HorasService.getHoras();
        vm.guardar = guardar;

        //Funciones, en orden alfabético
        function activate() {
            vm.asignacion = {};
        }

        function calcular(gasolina) {
            gasolina.base_gravable = gasolina.galones_gravado * (1 - (gasolina.porcentaje_alcohol / 100)) * gasolina.precio_referencia;
            gasolina.sobretasa = gasolina.base_gravable * 0.06;
        }

        function guardar() {
            vm.declaracion.fecha = $('#datepicker').val();
            console.log(vm.declaracion);
            //lstorage o memory
            if (DeclaracionesService.save(vm.declaracion)) {
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