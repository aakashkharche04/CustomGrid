customGrid.directive('myGrid', ['MockData', '$log', 'UserGridComm', function (MockData, $log, UserGridComm) {

    return {
        restrict: 'E',
        controller: function ($scope, UserGridComm) {
            this.ixc = $scope.ixc;
            var mg = this;
            mg.gridData = [];
            mg.newGridData = [];
            mg.textBoxFocus = false;

            mg.changeTextBoxesState = function (event, index, value) {
                document.getElementById("col2Input" + index).disabled = value;
                document.getElementById("col3Input" + index).disabled = value;
                if(value === false)
                {
                    this.textBoxFocus = true;
                }
            };

            mg.editRow = function (event, index) {
                this.changeTextBoxesState(event, index, false);
            };

            mg.updateDataSource = function (event, index) {
                this.changeTextBoxesState(event, index, true);
                UserGridComm.setSaveData(this.newGridData);
            };

            mg.undoChanges = function (event, index) {
                this.newGridData[index] = angular.copy(this.gridData[index]);
                UserGridComm.setSaveData(this.newGridData);
            };

            mg.deleteRow = function (event, index) {
                this.ixc.notify = true;
                this.ixc.message = "Row Deleted";
                this.newGridData[index].RowDelete = true;
                UserGridComm.setSaveData(this.newGridData);
            };

            mg.showButtons = function (event, index) {
                this.Buttons = 'true' + index;
            };

            mg.hideButtons = function (event, index) {
                this.Buttons = false;
            };
        },
        link: function(scope,element,attrs,directiveController)
        {
            var dataArray = attrs.gridData.split('.');
            scope.gridData = angular.copy(scope[dataArray[0]][dataArray[1]]);
            directiveController.newGridData = scope.gridData;
            var data = angular.copy(scope.gridData);
            directiveController.gridData = data;
            UserGridComm.setSaveData(data);
        },
        templateUrl: 'Home/Grid',
        controllerAs: 'mg'
    };

}]);