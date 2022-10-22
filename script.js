/*window.alert ("Warning: Entering Bread Zone");*/

//var pounds = 0.00220462;
var entry = document.getElementById("submission");

/*modal stuff*/

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0]; /*what does the 0 mean here*/

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