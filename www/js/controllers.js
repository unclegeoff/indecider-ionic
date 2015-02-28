angular.module('indecider.controllers', ['indecider.services'])


    .controller('usernameCtrl', function($scope) {
    })

    .controller('recentsCtrl', function($scope) {
        $scope.friends = Friends.all();
    })

    .controller('decisionCtrl', function($scope){
    })

    .controller('decisionCtrl', function($scope){
    })

    .controller('rankingCtrl', function($scope){
    })

    .controller('resultCtrl', function($scope){
    });
