customGrid.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                templateUrl: '/Home/Index',
                controller: 'IndexController'
            });
}]);