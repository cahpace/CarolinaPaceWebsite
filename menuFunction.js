/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menu() {
    let linksMenu = document.getElementById("myLinks");
    if (linksMenu.style.display === "block") {
        linksMenu.style.display = "none";
        
    } else {
        linksMenu.style.display = "block";
       
    }
  }