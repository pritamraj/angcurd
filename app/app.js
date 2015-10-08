/**
 * Created by Shivali on 6/29/15.
 */

    
        angular.module("Group",[]);
    


angular.module("misremit", ["ui.router","formly","formlyBootstrap"
    
        ,"Group"
    

])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        
            $stateProvider
            
                .state("Group",{
                    url: "/groups",
                    templateUrl: "modules/group/views/groups.html",
                    controller: "GroupCtrl"
                    })
            
         
        
            $urlRouterProvider.otherwise("/groups");
        
    }]);

