//front end logic//

function myFunction() {
  input = document.getElementById("myNumber").value;
  myoutput = "";

  //back end logic//
  for (i = 0; i <= input; i++) {
    returnvalue = i.toString();
    if (i.toString().includes("1")) {
      returnvalue = "Beep";
    };
    if (i.toString().includes("2")) {
      returnvalue = "Boop";
    };
    if (i.toString().includes("3")) {
      returnvalue = "I'm sorry Dave, I can't do that";
    };
    myoutput = myoutput.concat(returnvalue, "<li>");
  }
  document.getElementById("endResult").innerHTML = myoutput;
}
