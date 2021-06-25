var addednames = document.getElementById("added_names");
function submitnames() {
    var Guestname = document.getElementById("addnameinput").value;
    addednames.push(Guestname);
    addednames.sort();
}

function searchnames() {
    var s = document.getElementById("searchnameinput").value;
    var found = 0;
    var j;
    for (j = 0; j < addednames.length; j++) {
        if (s==addednames[j]) {
            found = found + 1;
        }
    }
    document.getElementById("searched_names").innerHTML = "Name Found " + found + " Time(s)";
    console.log("Found Name " + found + " Time(s)");
}