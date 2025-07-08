var globalBrand = ""

// window.alert("Made it!");

function switchBrand(brand){
  switch(brand){
    case "matrix":
      globalBrand = "matrix";
      document.getElementById("theHtml").style.color = "#fff";
      document.getElementById("theBody").style.color = "#00e600";
      document.getElementById("mainNavbar").style.backgroundColor = "orange";
      document.getElementById("theBody").style.backgroundColor = "#000";
      document.getElementById("secondNavbar").style.backgroundColor = "orange";
      
      break;
    case "citrusine_":
      globalBrand = "citrusine_";
      document.getElementById("theBody").style.color = "#fdffa9";
      document.getElementById("mainNavbar").style.backgroundColor = "#ffd365";
      document.getElementById("theBody").style.backgroundColor = "#019267";
      document.getElementById("secondNavbar").style.backgroundColor = "#f96";
      
      break;
    case "standard":
      globalBrand = "standard";
      document.getElementById("theBody").style.color = "black";
      document.getElementById("mainNavbar").style.backgroundColor = "#a2d5ab";
      document.getElementById("theBody").style.backgroundColor = "#366";
      document.getElementById("secondNavbar").style.backgroundColor = "#a2d5ab";
      //document.getElementsByClassName("navbar").style.background = "#000";
           
      break;
    case "submarine":
      globalBrand = "submarine";
      document.getElementById("theBody").style.color = "#39aea9";
      document.getElementById("mainNavbar").style.backgroundColor = "#219";
      document.getElementById("theBody").style.backgroundColor = "#557b83";
      document.getElementById("secondNavbar").style.backgroundColor = "#219";
            
      break;
    case "pistachio":
      globalBrand = "pistachio";
      document.getElementById("theBody").style.color = "teal";
      document.getElementById("mainNavbar").style.backgroundColor = "#333";
      document.getElementById("theBody").style.backgroundColor = "#a2d5ad";
      document.getElementById("secondNavbar").style.backgroundColor = "#333";
            
      break;
    case "elFuego":
      globalBrand = "elFuego";
      document.getElementById("theBody").style.color = "#123";
      document.getElementById("mainNavbar").style.backgroundColor = "#ff4d00";
      document.getElementById("theBody").style.backgroundColor = "#f00";
      document.getElementById("secondNavbar").style.backgroundColor = "#ff4d00";
            
      break;
  }
}

