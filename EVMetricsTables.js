function loadData(cum_DataTable){


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
