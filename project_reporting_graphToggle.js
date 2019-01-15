function graphChange()
{
  var scurve = document.getElementById('projectSCurve').src="s-curve.png";
  document.getElementById("scurve_graph").innerHTML = scurve;

  var periodBar = document.getElementById('periodBar').src="bar-chart.png";
  document.getElementById("period_graph").innerHTML = periodBar;

  var sideByside = document.getElementById('sideByside').value;
  document.getElementById("sideByside_graph").innerHTML = sideByside;

  var dualAxis = document.getElementById('dualAxis').value;
  document.getElementById("dualAxis_graph").innerHTML = dualAxis;
}
