/*
*
 * Created by Shivali on 6/30/15.
//  */
// angular.module('Customers')
//     .factory("services", ['$http', function($http) {
//       var serviceBase = 'services/'
     
//        var obj = {};
//         obj.getCustomers = function(){
//             return $http.get(serviceBase + 'customers');
//         }
//     return obj;   
//  }]);

angular.module('Customers')
    .factory('CustomersServices',["$http","$q",function ($http,$q) {
        return {
            retrieveCustomerss:function(){

                var defer=$q.defer();
                $http.get("services/customers")
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            },
            saveCustomers:function(CustomersObj){

                var defer=$q.defer();
                $http.post("services/insertCustomer",CustomersObj)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            },

            updateCustomers:function(id,CustomersObj){

                var defer=$q.defer();
                $http.put("services/updateCustomer",{id:id,customer:CustomersObj})
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});

                return defer.promise;
            },
            deleteCustomers:function(id){
                var defer=$q.defer();
                $http.delete("services/deleteCustomer?id="+id)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});

                return defer.promise;
            },
            retrieveCustomersById:function(id){
                var defer=$q.defer();
                $http.get("services/customer?id="+id)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            }
        };
    }]);
    