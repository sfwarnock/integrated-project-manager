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


window.onscroll = function() {stickyNav()};

var topnav = document.getElementById("topnav");

function stickyNav)(){
  if (window.pageYOffset >= sticky){
    topnav.classlist.add("sticky"){
  } else{
    topnav.classtList.remove("sticky")
  }
}

var header = document.getElementById("subnav");
var button = document.getElementByClassName("subnavbutton");

for ( var i = 0; i < button.length; i++){
  button[i].addEventLister("click", function(){
    var current = document.getElementByClassName("active");
    current[0].classname = current[0].className.replace(" active", "");
    this.classname += " active";
  })
}
