function myFunction() {
  input = document.getElementById("myNumber").value;
  myoutput = "";
  for (i = 0; i <= input; i++) {
    returnvalue = i.toString();
    if (i.toString().includes("1")) {
      returnvalue = "Beep";
    };
    if (i.toString().includes("2")) {
      returnvalue = "Boop";
    };
    if (i.toString().includes("3")) {
      returnvalue = "DAVE";
    };
    myoutput = myoutput.concat(returnvalue, "<li>");
  }
  document.getElementById("endResult").innerHTML = myoutput;
}
