function momentsShow(evt, momentName) {
  var i, tabcontent, optionname;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  optionname = document.getElementsByClassName("optionname");
  for (i = 0; i < optionname.length; i++) {
    optionname[i].className = optionname[i].className.replace(" active", "");
  }
  document.getElementById(momentName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();