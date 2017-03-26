'use strict';
                                         
angular
  .module('main', [])
  	.config(['$httpProvider', function($httpProvider) {
  		$httpProvider.defaults.withCredentials = true;
		}])
  	.factory('myConfig', [ '$rootScope', function ($rootScope) {
	    $rootScope.license_id = ""; // global variable

	    return {
	        getLicenseId: function() {
	            return $rootScope.license_id;
	        },
	        setLicenseId: function(id) {
	            console.log("Id:" + id);
	            return $rootScope.license_id = id;
	        }
	    };
	}]);
