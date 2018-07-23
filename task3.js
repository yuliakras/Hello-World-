btn.addEventListener('click', function(e) {
  e.preventDefault();
  var str1 = first.value;
var str2 = second.value;
var strUser = sign.options[sign.selectedIndex].text;



let expected =0;
switch(strUser){
  case "test2": alert(str1 + " " + str2 + " " + strUser); break;
  case "+": expected = Number(str1) + Number(str2); break;
  case "-": expected = Number(str1) - Number(str2); break;
  case "*": expected = Number(str1) * Number(str2); break;
  case "/": expected = Number(str1) / Number(str2); break;
}
result.innerHTML = expected;

// expected - real result;
});
function showMessage() {
  if(str2 === excpected) {
    result.innerHTML = 'Well done!';
  } else if(str2 != expected) {
    result.innerHTML = 'Try again.';
  }
  alert(expected);
} 
