function loadData(project_todate) {
  var acwp = document.getElementById('acwp');
  acwp.textContent = '$ ' + parseFloat(project_todate['ACWP']).toLocaleString(undefined, {maximumFractionDigits:0});

  var bac = document.getElementById('bac');
  bac.textContent = '$ ' + parseFloat(project_todate['BAC']).toLocaleString(undefined, {maximumFractionDigits:0});

  var bcwp = document.getElementById('bcwp');
  bcwp.textContent = '$ ' + parseFloat(project_todate['BCWP']).toLocaleString(undefined, {maximumFractionDigits:0});

  var bcwr = document.getElementById('bcwr');
  bcwr.textContent = '$ ' + parseFloat(project_todate['BCWR']).toLocaleString(undefined, {maximumFractionDigits:0});

  var bcws = document.getElementById('bcws');
  bcws.textContent = '$ ' + parseFloat(project_todate['BCWS']).toLocaleString(undefined, {maximumFractionDigits:0});

  var cpi = document.getElementById('cpi');
  cpi.textContent = parseFloat(Math.round(project_todate['CPI']*100)/100).toFixed(2);

  var cv = document.getElementById('cv');
  cv.textContent = '$ ' + parseFloat(project_todate['CV']).toLocaleString(undefined, {maximumFractionDigits:0});

  var eac_CPI = document.getElementById('EAC_CPI');
  eac_CPI.textContent = '$ ' + parseFloat(project_todate['EAC_CPI']).toLocaleString(undefined, {maximumFractionDigits:0});

  var eac_comp = document.getElementById('EAC_Composite');
  eac_comp.textContent = '$' + parseFloat(project_todate['EAC_Composite']).toLocaleString(undefined, {maximumFractionDigits:0});

  var eac_gen = document.getElementById('eac_gen');
  eac_gen.textContent = '$ ' + parseFloat(project_todate['EAC_General']).toLocaleString(undefined, {maximumFractionDigits:0});

  var etc = document.getElementById('etc');
  etc.textContent = '$ ' + parseFloat(project_todate['ETC']).toLocaleString(undefined, {maximumFractionDigits:0});

  var perACWP = document.getElementById('perACWP');
  perACWP.textContent = '$ ' + parseFloat(project_todate['PerACWP']).toLocaleString(undefined, {maximumFractionDigits:0});

  var perBCWP = document.getElementById('perBCWP');
  perBCWP.textContent = '$ ' + parseFloat(project_todate['PerBCWP']).toLocaleString(undefined, {maximumFractionDigits:0});

  var perBCWS = document.getElementById('perBCWS');
  perBCWS.textContent = '$ ' + parseFloat(project_todate['PerBCWS']).toLocaleString(undefined, {maximumFractionDigits:0});

  var perCPI = document.getElementById('perCPI');
  perCPI.textContent = parseFloat(project_todate['PerCPI']).toFixed(2);

  var perCV = document.getElementById('perCV');
  perCV.textContent = '$ ' + parseFloat(project_todate['PerCV']).toLocaleString(undefined, {maximumFractionDigits:0});

  var percentcom = document.getElementById('percentcom');
  percentcom.textContent = parseFloat(Math.round(project_todate['PerComp'] *100) / 100).toFixed(4) * 100;

  var period_percentcom = document.getElementById('period_percentcom');
  period_percentcom.textContent = parseFloat(Math.round(project_todate['PerPerComp'] *100) / 100).toFixed(4) * 100;

  var perSPI = document.getElementById('perSPI');
  perSPI.textContent = parseFloat(project_todate['PerSPI']).toLocaleString('en');

  var perSV = document.getElementById('perSV');
  perSV.textContent = '$ ' + parseFloat(project_todate['PerSV']).toLocaleString(undefined, {maximumFractionDigits:0});

  var spi = document.getElementById('spi');
  spi.textContent = parseFloat(project_todate['SPI']).toLocaleString(undefined, {maximumFractionDigits:2});

  var sv = document.getElementById('sv');
  sv.textContent = '$ ' + parseFloat(project_todate['SV']).toLocaleString(undefined, {maximumFractionDigits:0});

  var tcpi_bac = document.getElementById('tcpi_bac');
  tcpi_bac.textContent = parseFloat(Math.round(project_todate['TCPI_BAC']*100) / 100).toFixed(2);

  var tcpi_eac = document.getElementById('tcpi_eac');
  tcpi_eac.textContent = parseFloat(Math.round(project_todate['TCPI_EAC']*100) / 100).toFixed(2);

  var vac = document.getElementById('vac');
  vac.textContent = '$' + parseFloat(project_todate['VAC']).toLocaleString(undefined, {maximumFractionDigits:0});

  var totalbudget = document.getElementById('totalbudget');
  totalbudget.textContent = '$ ' + parseFloat(project_todate['BAC']).toLocaleString(undefined, {maximumFractionDigits:0});

  var reportingpercent = document.getElementById('reportingpercent');
  reportingpercent.textContent = parseFloat(Math.round(project_todate['PerComp'] *100) / 100).toFixed(4) * 100 + '%';
}

$.getJSON( "cum_json.json", function(data) {
  console.log(data);
  loadData(data);
});
