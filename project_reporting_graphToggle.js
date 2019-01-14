function graphChange()
{
  var scurve = document.getElementById('projectSCurve').value;
  document.getElementById("scurve_graph").innerHTML = scurve;

  var periodBar = document.getElementById('periodBar').value;
  document.getElementById("period_graph").innerHTML = periodBar

  var sideByside = document.getElementById('sideByside').value;
  document.getElementById("sideByside_graph").innerHTML = periodBar

  var dualAxis = document.getElementById('dualAxis').value;
  document.getElementById("dualAxis_graph").innerHTML = periodBar
}
