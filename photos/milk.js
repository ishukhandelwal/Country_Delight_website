




function myFunction() {
    
    document.getElementById("abc").style.display = "none";

    document.getElementById("mySidenav").style.display = "inline-flex";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav(x) {
    x.classList.toggle("change");
    document.getElementById("mySidenav").style.display= "none";
    
    document.getElementById("abc").style.display = "block";
  }