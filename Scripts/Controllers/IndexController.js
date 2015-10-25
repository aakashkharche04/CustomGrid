customGrid.controller('IndexController', ['$scope', '$log', 'MockData', 'UserGridComm','SaveDataService', function ($scope, $log, MockData, UserGridComm, SaveDataService) {

    this.mockData = MockData.getTableData();
    this.message = null;
    this.notify = false;
    this.saveMessage = "Data Saved (Please check the console or its saved in an dummy object in SaveDataService.js)";

    this.saveGridData = function () {
        var Users = UserGridComm.getSavedData();
        var updatedUsers = [];
        if (Users.length > 0)
        {
            for(var i = 0 ; i < Users.length ; i++)
            {
                if(!Users[i].RowDelete)
                {
                    updatedUsers.push(Users[i]);
                }
            }
        }

        if (updatedUsers.length > 0)
        {
            SaveDataService.saveData(updatedUsers);
        }

        this.message = this.saveMessage;
        this.notify = true;
    };

    this.hideMessage = function () {
        this.notify = false;
    };

}]);