angular.module('Hrentals')
       .controller('Hrentalscontroller', function($scope, rentalFactory){
        $scope.rentals;
        
        $scope.priceInfo = {
            min: 0,
            max: 1000
        }
        
        rentalFactory.getRentals().success(function(data){
            $scope.rentals = data;
        }). error(function(error){
            console.log(error);
        });
    
    
});