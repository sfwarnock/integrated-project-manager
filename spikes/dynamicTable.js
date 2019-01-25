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

function generateTable(){

  var noData = jsonData.length;

  if(noData>0){
    var table = document.createElement("table");
    table.style.width = '50%';
    table.setAttibute('border', '1');
    table.setAttibute('cellspacing', '0');
    table.setAttibute('cellpadding', '5');
  }
}
