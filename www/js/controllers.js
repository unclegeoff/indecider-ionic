angular.module('indecider.controllers', ['indecider.services'])


    .controller('loginCtrl', function($scope, $state) {
        $scope.name = 'TurdBurger420';
        $scope.login = function(){
            $state.go('dashboard');
        }
    })

    .controller('dashboardCtrl', function($scope, $state){
        $scope.startDec = function(){
            $state.go('decision-name');
        };
        $scope.viewDecList = function(){
            $state.go('decisions-list');
        };
    })

    .controller('decisionsListCtrl', function($scope){

    })

    .controller('decisionNameCtrl', function($scope, $state){
        $scope.submitName = function(){
            $state.go('add-friends');
        }
    })

    .controller('addFriendsCtrl', function($scope, $state){
        $scope.submitFriends = function(){
            $state.go();
        }
    })
;
