'use strict';

var q;
var memberRemote;

var CarModel = function (object) {
  for (var key in object) {
    this[key] = object[key];
  }
};

CarModel.searchLicense = function (id) {
	var deferred = q.defer();
	carRemote.searchLicense(id)
		.success(function (data) {
			//console.log("memberRemote success");
			deferred.resolve(data);
		})
		.error(function (error) {
			console.log("error");
			deferred.reject(error);
		});
	return deferred.promise;
};

CarModel.$inject = ['$q'];

angular.module('main.car', [])
.factory('CarModel',
  ['$q', 'CarRemote',
  function ($q, CarRemote) {
    q = $q;
    carRemote = CarRemote;
    return CarModel;
  }
]);