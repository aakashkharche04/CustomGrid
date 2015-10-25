customGrid.service('MockData', function () {

    this.tableData = [{ Name: "aakash", Description: "Hi!! I am aakash", RowDelete:false },
                      { Name: "megha", Description: "Hey Hii", RowDelete: false },
                      { Name: "rishi", Description: ":) :) :)", RowDelete: false }];


    this.getTableData = function () {
        return this.tableData;
    };
  
});