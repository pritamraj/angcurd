/**
 * Created by Shivali on 6/29/15.
 */

    
        angular.module("Group",[]);
    
        angular.module("Customers",[]);
    


angular.module("misremit", ["ui.router","formly","formlyBootstrap"
    
        ,"Group"
    
        ,"Customers"
    

])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        
            $stateProvider
            
                .state("Group",{
                    url: "/groups",
                    templateUrl: "modules/group/views/groups.html",
                    controller: "GroupCtrl"
                    })
            
                .state("Customers",{
                    url: "/customerss",
                    templateUrl: "modules/customers/views/customerss.html",
                    controller: "CustomersCtrl"
                    })
            
         
        
            $urlRouterProvider.otherwise("/groups");
        
    }]);

