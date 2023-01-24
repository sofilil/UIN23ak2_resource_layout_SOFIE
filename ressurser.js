/* Hentet fra w3schoolS */

function openTab(evt, kategori) {
    // Declare all variables
    var i, tab, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(kategori).style.display = "block";
    evt.currentTarget.className += " active";
  }