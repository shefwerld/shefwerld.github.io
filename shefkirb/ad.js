var y = Math.round(Math.random() * 4)
  if (y == 1) {
    document.getElementById('adlower').src="siteclockad.png"
  } else if (y == 2) {
    document.getElementById('adlower').src="sitedad.png"
    document.getElementById('adlink').href="../mgd/index.html"
  } else if (y == 3)  {
    document.getElementById('adlower').src="sitepigad.png"
  } else  {
    document.getElementById('adlower').src="siteblayydad.png"
  }