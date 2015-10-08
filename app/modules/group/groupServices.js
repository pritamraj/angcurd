/**
 * Created by Shivali on 6/30/15.
 */

angular.module('Group')
    .factory('GroupServices',["$http","$q",function ($http,$q) {
        return {
            retrieveGroups:function(){

                var defer=$q.defer();
                $http.get("data/group.json")
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            },
            saveGroup:function(GroupObj){

                var defer=$q.defer();
                $http.post("group",GroupObj)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            },
            updateGroup:function(GroupObj){

                var defer=$q.defer();
                $http.put("group/"+GroupObj.id,GroupObj)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});

                return defer.promise;
            },
            deleteGroup:function(id){

                var defer=$q.defer();
                $http.delete("group/"+id)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});

                return defer.promise;
            },
            retrieveGroupById:function(id){

                var defer=$q.defer();
                $http.get("group/"+id)
                    .success(function(result){defer.resolve(result)})
                    .error(function(error){defer.reject(error)});
                return defer.promise;
            }
        }
    }]);