customGrid.controller('LayoutController', ['$scope', '$log', 'CacheService', function ($scope, $log, CacheService) {

    CacheService.setCacheObject('gridcache');
}]);