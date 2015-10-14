/**
 * Created by Shivali on 6/30/15.
 */

angular.module('Group')
    .controller('GroupCtrl', ["$scope", "$rootScope", "GroupServices", function ($scope, $rootScope,GroupServices) {

        $scope.currentGroup= {};
        $scope.groupFields=[{"type":"input","templateOptions":{"label":"groupName","required":false,"type":"text"}},{"type":"input","templateOptions":{"label":"status","required":false,"type":"text"}}];

        // retrieve Group to server
        $scope.retrieveGroups = (function(){
            GroupServices.retrieveGroups()
                .then(function(result){
                    $rootScope.groups = result;
                    },function(error){
                        alert(error);
                    })
            })();


        $scope.openAddGroup=function(){
            $scope.currentGroup= {};
            $('#addGroup.modal').modal('show');
        }

        // save Group to server
        $scope.saveGroup = function(){
            GroupServices.saveGroup($scope.currentGroup)
            .then(function(result){
                    $rootScope.groups.push(result);
                },function(error){
                    alert(error);
                })
        }

        $scope.openUpdateGroup=function(data){
            $scope.currentGroup=angular.copy(data);
            $('#updateGroup.modal').modal('show');
        }

        //update data to server
        $scope.updateGroup = function(){
            GroupServices.updateGroup($scope.currentGroup)
            .then(function(result){
                for(var key in $rootScope.groups){
                    if(result.id==$rootScope.groups[key].id)
                        $rootScope.groups[key] = result;
                }
                },function(error){
                    alert(error);
                })
        }

        $scope.openDeleteGroup=function(data){
            $scope.currentGroup=angular.copy(data);
            $('#deleteGroup.modal').modal('show');
        }

        //delete data to server
        $scope.deleteGroup = function(){
                GroupServices.deleteGroup($scope.currentGroup.id)
                .then(function(result){
                    for(var key in $rootScope.groups){
                        if($scope.currentGroup.id==$rootScope.groups[key].id){
                            $rootScope.groups.splice(key,1);
                            break;
                        }
                }
                },function(error){
                    alert(error);
                })
        }

        $scope.emptyGroup = function(){
            $scope.currentGroup={};
        }
    }]);