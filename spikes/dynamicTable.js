var tableJSON = [
 {
   "Header": "Column1",
   "Values": [
     "75",
     "79",
     "83"
   ]
 },
 {
   "Header": "Column2",
   "Values": [
     "77",
     "81",
     "86",
     "90"
   ]
 },
 {
   "Header": "Column3",
   "Values": [
     "98",
     "117"
   ]
 }
];


var tableDiv = document.createElement("table");
var trElement =  document.createElement("tr");
 tableDiv.appendChild( trElement );

var prDiv = document.getElementById("pr");
tableJSON.forEach(function(a_column, index){
if(a_column.Header)
	{
  var tdElement =  document.createElement("td");
  tdElement.innerHTML = "<b>" + a_column.Header + "</b>";
  trElement.appendChild( tdElement );
  }
  if(a_column.Values){
  var allRows = tableDiv.childNodes;

  for(var i=0 ;i< a_column.Values.length; i++)
  {
  var rowWanted = allRows[i+1];
  if( !rowWanted )
  {
  	rowWanted = document.createElement("tr");
   	tableDiv.appendChild( rowWanted );
  }
  if(rowWanted.childNodes.length==0)
  	for(var j=0; j< tableJSON.length; j++){
    rowWanted.appendChild( document.createElement("td") );
    }

  rowWanted.childNodes[ index ].innerHTML = a_column.Values[i];
  }
}
});
prDiv.appendChild(tableDiv);
