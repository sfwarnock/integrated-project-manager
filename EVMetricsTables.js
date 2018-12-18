var cum_DataTable = {
    "Cumulative Earned Value": {
        "18-Apr": 79800.0,
        "18-Aug": 195400.0,
        "18-Jul": 178000.0,
        "18-Jun": 136600.0,
        "18-Mar": 37900.0,
        "18-May": 106200.0
    },
    "Cumulative Planned Value": {
        "18-Apr": 86800.0,
        "18-Aug": 190400.0,
        "18-Jul": 165000.0,
        "18-Jun": 143600.0,
        "18-Mar": 43400.0,
        "18-May": 122200.0
    },
    "Cumulative Total Cost": {
        "18-Apr": 122250.0,
        "18-Aug": 240600.0,
        "18-Jul": 224600.0,
        "18-Jun": 187100.0,
        "18-Mar": 13500.0,
        "18-May": 166600.0
    }
}

function addHeaders(table, keys) {
  var row = table.insertRow();
  for( var i = 0; i < keys.length; i++ ) {
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(keys[i]));
  }
}

var table = document.createElement('table');
for( var i = 0; i < children.length; i++ ) {

  var child = cum_DataTable[i];
  if(i === 0 ) {
    addHeaders(table, Object.keys(child));
  }
  var row = table.insertRow();
  Object.keys(child).forEach(function(k) {
    console.log(k);
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(child[k]));
  })
}

document.getElementById('cum_DataTable').appendChild(table);
