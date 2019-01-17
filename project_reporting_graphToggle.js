var index = 0;
var imageList = ['s-curve.png', 'bar-chart.png'];

function graphButtons(){
  index = index + 1;
  if(index == imageList.length){
    index = 0;
  }
  var s-curve = document.getElementById("s-curve");
  s-curve.src = imageList[index];
}
