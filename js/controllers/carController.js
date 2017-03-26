'use strict';
                                         
angular
  .module('main')
  .controller('carController', ['$scope', '$rootScope', 'myConfig','$window','$http', '$location',
    function ($scope, $rootScope, myConfig, $window,$http, $location) {
    		
    // $http({
    //     method: 'GET',
    //     url: 'http://example.com'+'?id=xxxx'
    // }).then(function successCallback(response) {
	      $scope.idcar = "สฬ-5420";
	      $scope.province = "ขอนแก่น";
	      $scope.datein = "วันอาทิตย์ 19 กพ 60 เวลา 10.00น.";
	      $scope.dateout = "วันอาทิตย์ 19 กพ 60 เวลา 17.23น.";
	      $scope.counthr = "8";
	      $scope.pay = "60";

	      // $scope.idcar = response.carId;
	      // $scope.province = response.province;
	      // $scope.datein = response.datein;
	      // $scope.dateout = response.dateout;
	      // $scope.counthr = response.duration;
	      // $scope.pay = response.parkFee;

	      console.log('Current login status', $rootScope.license_id);
	      myConfig.setLicenseId("CC");
	      console.log('Current login status', $rootScope.license_id);

	      var s = $location.search('id');
	      console.log(s);
	      $scope.id ="";
	      $scope.search = function () {
	      	myConfig.setLicenseId($scope.id);
	      	console.log('Current login status', $rootScope.license_id);

	      	$window.location.href = 'payment.html'
      	   }
     //  	},
     //  	function errorCallback(response) {

     //  	}
    	// );
    }]);
  