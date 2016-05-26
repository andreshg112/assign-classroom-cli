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
        vm.mostrarAsignacion = mostrarAsignacion;

        function mostrarAsignacion(asignacion) {
            vm.declaracionSeleccionada = asignacion;
            vm.isMostrado = true;
            console.log("Seleccionada:", asignacion);
        }

        function activate() {
            // lstorage o memory
            //vm.asignaciones = AsignacionesService.all();
            AsignacionesService.all()
                    .then(function (response) {
                        vm.asignaciones = response.data.result;
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert(error.statusText);
                    });
        }

        activate();
    }
})();