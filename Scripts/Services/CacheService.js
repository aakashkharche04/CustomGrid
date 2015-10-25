customGrid.service('CacheService', ['$cacheFactory', function ($cacheFactory) {

    this.cacheObject = null;

    this.setCacheObject = function (cacheVariable) {
        this.cacheObject = $cacheFactory(cacheVariable);
    };
    
    this.getCacheObject = function () {
        return this.cacheObject;
    };

}]);