var jsonData [
  {
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
];

var keys = [];


function cumTable(){
  document.write("<table border==\"1\"><tr>");
  for (key in jsonData[0]){
    document.wrtie('<td>' + key + '<td>');
  }

  document.write("</tr>");
  for (var i = 0; i < jsonData.length; i++) {
    document.write('<tr>');
    for (key in jsonData[i]){
      document.write('<td>' + jsonData[i][key] + '</td>');
    }
    document.write('</tr>');
  }
  document.write("table");
}
