angular
	.module('Hrentals')
	.controller('addcontroller', function($scope, rentalFactory1) {

    $scope.rentals;
        
  $scope.newListing = {};
        
        $scope.addRental = function(newListing) {
            newListing.image= 'default-rental';
            $scope.rentals.push(newListing);
            $scope.newListing={};
        }
        
        $scope.editRental = function(rental) {
            $scope.editListing= true;
            $scope.existingListing = rental;
        }
        
        $scope.saveRentalEdit=function(){
            $scope.existingListing= {};
            $scope.editListing = false;
        }
        $scope.deleteRental = function(listing){
            var index= $scope.rentals.indexOf(listing);
            $scope.rentals.splice(index,1);
            $scope.existingListing = {};
            $scope.editListing=false;
        }
        
        rentalFactory1.getRentals().success(function(data){
            $scope.rentals = data;
        }). error(function(error){
            console.log(error);
        });

		

	});