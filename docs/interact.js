/* Erin Mooney */


/* Pop Up */
window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    alert('Welcome! A character I like just died. So, here is a fun button to help distract from my woes.');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', myFunction, false)
    
    var fieldset = document.getElementsByTagName("input");
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
        }
}

/* Button 0 */
function myFunction() {
    var x = document.getElementById("commentToggle");    
  if (x.innerHTML === "Thanks for visiting") 
  {
    x.innerHTML = "Please stop clicking, I'm getting dizzy.";
  } else {
    x.innerHTML = "Thanks for visiting";
  }
}
    
/* Checkboxes */
function toggle() {
    var id = this.id;
    switch (id) {
        case "niceToggle": {
            var chars = document.getElementsByClassName("nice");
            for (var i = 0; i < nice.length; i++) {
                nice[i].classList.toggle("on")
            }
        };
        break;
        case "sadToggle": {
            var places = document.getElementsByClassName("sadFace");
            for (var i = 0; i < sad.length; i++) {
                sad[i].classList.toggle("on")
            }
        };
        break;
        case "needToggle": {
            var objects = document.getElementsByClassName("joy");
            for (var i = 0; i < need.length; i++) {
                need[i].classList.toggle("on")
            }
        };
        break;
        case "questionsToggle": {
            var objects = document.getElementsByClassName("goodQ");
            for (var i = 0; i < question.length; i++) {
                question[i].classList.toggle("on")
            }
        };
        break;
        case "ouchToggle": {
            var objects = document.getElementsByClassName("fineThen");
            for (var i = 0; i < fine.length; i++) {
                fine[i].classList.toggle("on")
            }
        };
        break;
    }
  }