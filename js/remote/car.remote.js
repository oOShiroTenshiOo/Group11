'use strict';

var CarRemote = function ($http) {
	this.$http = $http;
};

CarRemote.prototype.searchLicense = function (id) {
	var $http = this.$http;

	//console.log("logout");

	var remote = $http({
		method: "get",
		url: "www.xxx.com/id="+id
	});

	return remote;
}


angular.module('main.remote')
.factory('CarRemote', 
	['$http', 
	function ($http) {
		return new CarRemote($http);
	}]);
