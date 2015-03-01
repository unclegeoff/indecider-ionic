angular.module('indecider.services', ['ngResource'])

    .factory('Friends', function($resource){
        return $resource('/:id/friends');
    })

    .factory('Decisions', function($resource){
        return $resource('/:id/decisions');
    })

    .factory('Decision', function($resource){
        return $resource('/:id/decisions/:decision_id');
    })

;