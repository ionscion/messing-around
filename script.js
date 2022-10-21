/*window.alert ("Warning: Entering Bread Zone");*/

var x = 10;
var y = 15;
var Z = x + y;
var pounds = 0.00220462;
var entry = id="submission";

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
    document.getElementById("jsNote").innerHTML = "The value of random number plus Z is " + Z;

}

function poundconvert() {
    return entry * pounds;
}
document.getElementById("output").innerHTML = poundconvert();