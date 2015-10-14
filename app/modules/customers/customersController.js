/**
 * Created by Shivali on 6/30/15.
 */

angular.module('Customers')
    .controller('CustomersCtrl', ["$scope", "$rootScope", "CustomersServices", function ($scope, $rootScope,CustomersServices) {

        
        $scope.currentCustomers= {};

        $scope.model = {}
 
        $scope.customersFields=[
                                {
                                    "key": "customerNumber",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "Contact Number",
                                    "type": "text"
                                }},
                                {            
                                    "key": "customerName",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "Customer Name",
                                    "type": "text"
                                }},
                                 {            
                                    "key": "email",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "Email Address",
                                    "type": "email"
                                }},
                                 {            
                                    "key": "address",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "address",
                                    "type": "text"
                                }},
                                 {            
                                    "key": "city",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "City",
                                    "type": "text"
                                }},
                                 {            
                                    "key": "state",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "State",
                                    "type": "text"
                                }},
                                 {            
                                    "key": "postalCode",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "Postal Code",
                                    "type": "text"
                                }},
                                 {            
                                    "key": "country",
                                    "type": "input",
                                    "templateOptions": {
                                    "label": "Country",
                                    "type": "text"
                                }}

                               
        ];








        // retrieve Customers to server
        $scope.retrieveCustomerss = (function(){
            CustomersServices.retrieveCustomerss()
                .then(function(result){
                   // console.log($result);
                    $rootScope.customerss = result;
                    },function(error){
                        alert(error);
                    })
            })();

        $scope.openAddCustomers=function(){
            $scope.currentCustomers= {};
            $('#addCustomers.modal').modal('show');
        }

        // save Customers to server
        $scope.saveCustomers = function(){
            CustomersServices.saveCustomers($scope.currentCustomers)
            .then(function(result){
                    $rootScope.customerss.push(result);
                },function(error){
                    alert(error);
                })
        }

        $scope.openUpdateCustomers=function(data){
            $scope.currentCustomers=angular.copy(data);
            //console.log($scope.currentCustomers);
            $('#updateCustomers.modal').modal('show');
        }

        //update data to server
        $scope.updateCustomers = function(){
           
            CustomersServices.updateCustomers($scope.currentCustomers.customerNumber, $scope.currentCustomers )
            .then(function(result){
                for(var key in $rootScope.customerss){
                    if(result. customerNumber==$rootScope.customerss[key]. customerNumber)
                        $rootScope.customerss[key] = result;
                }
                },function(error){
                    alert(error);
                })

             
              $('#updateCustomers.modal').modal('hide');
             
        }

        $scope.openDeleteCustomers=function(data){
            console.log(data);
            $scope.currentCustomers=angular.copy(data);
            $('#deleteCustomers.modal').modal('show');
        }

        //delete data to server
        $scope.deleteCustomers = function(){
                CustomersServices.deleteCustomers($scope.currentCustomers.customerNumber)
                .then(function(result){
                    for(var key in $rootScope.customerss){
                        if($scope.currentCustomers. customerNumber==$rootScope.customerss[key]. customerNumber){
                            $rootScope.customerss.splice(key,1);
                            break;
                        }
                }
                },function(error){
                    alert(error);
                })
        }

        $scope.emptyCustomers = function(){
            $scope.currentCustomers={};
        }

        $scope.reloadRoute = function() {
                    $state.reload();
                };


    }]);