(function() {

var eduServices = angular.module("eduBlog.services", []);

eduServices.factory("BlogService", ["API_URL", "$http", function(API_URL, $http) {

    function getPosts() {
        return $http.get(API_URL);
    }

    function getPost(id) {
        return $http.get(API_URL + "/" + id);
    }

    return {
        getPosts: getPosts,
        getPost: getPost
    };

}]);

})();