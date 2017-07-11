angular.module('Hrentals')
       .factory('rentalFactory', function($http){
    
    function getRentals (){
        return $http.get('data/data.json');
    }
    
    return {
        getRentals: getRentals
    }
});