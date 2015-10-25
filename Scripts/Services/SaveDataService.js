customGrid.service('SaveDataService', ['$log', 'CacheService', function ($log, CacheService) {

    this.count = 0;

    this.saveData = function (users) {
        // Either put the saved object in cache or print in the console
        var cache = CacheService.getCacheObject();
        cache.put("Object" + this.count, users);
        this.count++;

        for(var i = 0 ; i < users.length; i++)
        {
            $log.log(users[i].Name + "-" + users[i].Description);
        }
    };
}]);