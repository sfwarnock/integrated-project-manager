var datatable = {
    "Cumulative Earned Value": {
        "18-Apr": 79800.0,
        "18-Aug": 195400.0,
        "18-Jul": 178000.0,
        "18-Jun": 136600.0,
        "18-Mar": 37900.0,
        "18-May": 106200.0
};

var dataValues = dataObj["1"];

for (var i dataValues) {
  var table = document.getElementById("table");
  var tableRow = document.createElement("tr");
  var tableData = document.createElement("td");

  for (var key in dataValues[i]){
    var txt = document.createTextNode(key);
    td.appendChild(txt);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
