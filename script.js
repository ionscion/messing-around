/*window.alert ("Warning: Entering Bread Zone");*/

//var pounds = 0.00220462;
var entry = document.getElementById("submission");

/*modal stuff*/

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0]; /*what does the 0 mean here*/

var notebtn = document.getElementById("notebtn");

notebtn.onclick = function() {
    document.getElementById("note-content").innerHTML= `After the initial cold rise overnight, shape the dough and place it in proofing
    basket for an additional 1.5-2 hours while the oven is preheating. The dough will not have risen as much, but it will get significant
    oven-spring due it being chilly. Trust me!`;
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function myFunction() {
    document.getElementById("myNote").innerHTML = "Working with a yeast starter is hard!";
}

function poundconvert(pounds,entry) {
    return entry * pounds;
}

//what is the => in this case? suggestion by vs
submit.onclick = () => {
   const pounds = 0.00220462;
   const entryValue = Number(entry.value);
   const result = poundconvert(pounds,entryValue);

   output.innerHTML = result + " Pounds!";
}