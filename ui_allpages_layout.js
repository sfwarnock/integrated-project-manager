function projectInitiationlinks() {
  document.getElementById("pIdropDownLink").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropButton')){
  var myDropDown = document.getElementById("pIdropDownLink");
    if (myDropDown.classList.contains('show')){
      myDropDown.classList.remove('show');
    }
  }
}

function projectManagementlinks() {
  document.getElementById("pMdropDownLink").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropButton')){
  var myDropDown = document.getElementById("pMdropDownLink");
    if (myDropDown.classList.contains('show')){
      myDropDown.classList.remove('show');
    }
  }
}