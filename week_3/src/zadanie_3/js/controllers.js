(function() {

var eduControllers = angular.module("eduBlog.controllers", []);

eduControllers.controller("BlogController", ["BlogService", "$scope", function(BlogService, $scope) {

    BlogService.getPosts()
        .then(function(res) {
            $scope.posts = res.data;
        });

}]);

eduControllers.controller("PostController", ["BlogService", "$routeParams", "$scope", function(BlogService, $routeParams, $scope) {

    BlogService.getPost($routeParams.id)
        .then(function(res) {
            $scope.post = res.data;
        });

}]);

})();