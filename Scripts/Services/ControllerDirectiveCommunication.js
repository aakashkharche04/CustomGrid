customGrid.service('UserGridComm', ['$log', function ($log) {

    this.dataToSave = [];

    this.setSaveData = function (users) {
        this.dataToSave = angular.copy(users);
    };

    this.getSavedData = function () {
        return this.dataToSave;
    };
}]);