function dropdownlinks() {
  document.getElementById("dropDownLink").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropButton')){
  var myDropDown = document.getElementById("dropDownLink");
    if (myDropDown.classList.contains('show')){
      myDropDown.classList.remove('show');
    }
  }
}
