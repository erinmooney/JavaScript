/* Erin Mooney */


/* Pop Up */
window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    alert('Welcome! A character I like just died. So, here is a fun button to help distract from my woes.');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeComment, false)
}

function myFunction() {
    var x = document.getElementById("commentToggle");    
  if (x.innerHTML === "Thanks for visiting") 
  {
    x.innerHTML = "Please stop clicking, I'm getting dizzy.";
  } else {
    x.innerHTML = "Thanks for visiting";
  }
}
    