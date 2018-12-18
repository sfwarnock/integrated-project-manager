function loadData(cum_DataTable){
  var tableColumns = addAllColumnHeaders(cum_DataTable);

  for (var i = 0; i < cum_DataTable.length, i++){
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < column.length; colIndex++){
      var cellValue = cum_DataTable[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
  }

}

$.getJSON( "cum_EVMetrics.json", function(data) {
  console.log(data);
  loadData(data);
});


function loadData(cum_periodTable){

}

$.getJSON( "period_EVMetrics.json", function(data) {
  console.log(data);
  loadData(data);
});
