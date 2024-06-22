function myvalue() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;
    var e = document.getElementById("n5").value;

    if (a == "" || b == "" || c == "" || d == "" || e == "") {
        alert("All Fields are mendatory");
        return false;
    } else if (d.length < 10 || d.length > 10) {
        alert("Number should be of 10 Digits ! Please enter valid Number");
        return false;
    } else if (isNaN(d)) {
        alert("Only Number are allowed ! Please enter valid Number");
        return false;
    } else {
        true;
    }
}