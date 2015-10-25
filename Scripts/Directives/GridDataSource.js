customGrid.directive('gridData',['$log', function ($log) {

    return {
        restrict: 'my-grid',
        link: function (scope, element, attrs, controller) {
            debugger;
            console.log("gridData");
        }
    };

}]);