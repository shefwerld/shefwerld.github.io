function themeswitcher(){
    if (window.localStorage.getItem('theme') == "light") {
      document.getElementById("pagetheme").setAttribute("href", "themedark.css");
      document.getElementById("sknnlogo").setAttribute("src", "logodark.png");
      window.localStorage.setItem('theme', 'dark');
    } else  {
      theme = 0;
      document.getElementById("pagetheme").setAttribute("href", "theme.css");
      document.getElementById("sknnlogo").setAttribute("src", "logo.png");
      window.localStorage.setItem('theme', 'light');
    }
  }
  function themeloader(){
    if (window.localStorage.getItem('theme') == "dark") {
      document.getElementById("pagetheme").setAttribute("href", "themedark.css");
      document.getElementById("sknnlogo").setAttribute("src", "logodark.png");
    } else  {
      document.getElementById("pagetheme").setAttribute("href", "theme.css");
      document.getElementById("sknnlogo").setAttribute("src", "logo.png");
      window.localStorage.setItem('theme', 'light');
    }
  }