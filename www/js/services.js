angular.module('indecider.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('Session', function($resource) {
  // Might use a resource here that returns a JSON array
    //TODO: define endpoint from rails backend;
        return $resource('endpoint');
  // Some fake testing data
  /*var friends = [
    { id: 0, name: 'turdburger' },
    { id: 1, name: 'flowercrotch' },
    { id: 2, name: 'dingleberry' },
    { id: 3, name: 'sausagefingers' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }*/
});
