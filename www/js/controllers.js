angular.module('indecider.controllers', ['indecider.services'])


    .controller('loginCtrl', function($scope) {
        $scope.name = 'TurdBurger420';
    })

    .controller('dashboardCtrl', function($scope, $state){
        $scope.startDec = function(){
            $state.go('#/start_dec');
        };
        $scope.viewDecList = function(){
            $state.go('#/decisions');
        };
    })

    .controller('decisionsListCtrl', function($scope){

    })

    .controller('decisionStartCtrl', function($scope){

    })
;
