angular.module('Hrentals')
       .factory('rentalFactory', function($http){
    
    function getRentals (){
        return $http.get('../data/data1.json');
    }
    
    return {
        getRentals: getRentals
    }
});