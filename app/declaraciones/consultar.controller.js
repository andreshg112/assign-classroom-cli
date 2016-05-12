(function () {
    'use strict';

    angular
            .module('gasolinaApp')
            .controller('ConsultarController', ConsultarController);

    ConsultarController.$inject = ['AsignacionesService'];
    function ConsultarController(AsignacionesService) {
        console.log("Entró a ConsultarController");
        var vm = this;
        vm.declaracionSeleccionada = {};
        vm.asignaciones = [];
        vm.isMostrado = false; //Variable para el alert que muestra el registro. Inicia sin ser mostrado.
        vm.mostrarDeclaracion = mostrarDeclaracion;

        function mostrarDeclaracion(declaracion) {
            vm.declaracionSeleccionada = declaracion;
            vm.isMostrado = true;
            console.log("Declaración seleccionada:", declaracion);
        }

        function activate() {
            // lstorage o memory
            vm.asignaciones = AsignacionesService.all();
//            AsignacionesService.all()
//                    .then(function (response) {
//                        vm.asignaciones = response.data;
//                    })
//                    .catch(function (error) {
//                        console.log(error);
//                        alert(error.statusText);
//                    });
        }

        activate();
    }
})();