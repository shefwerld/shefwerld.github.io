setInterval(function(){
    if (window.localStorage.getItem('theme') == "light") {
      document.getElementById("themeswitchbutton").innerHTML = "<i class='far fa-moon'></i>";
    } else  {
      document.getElementById("themeswitchbutton").innerHTML = "<i class='far fa-sun' style='color:#FCFCFC;'></i>";
    }
  },250)