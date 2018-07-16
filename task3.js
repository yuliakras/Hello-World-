btn.addEventListener('click', function(e) {
    
  var str1 = first.value;
  e.preventDefault();
  var str2 = second.value;
  
  result.innerHTML = str2;


var strUser = sign.options[sign.selectedIndex].text;
let expected =0;
switch(strUser){
    case "test2": alert(str1 + " " + str2 + " " + strUser); break;
    case "+": expected = Number(str1) + Number(str2); break;
    case "-": expected = Number(str1) - Number(str2); break;
    case "*": expected = Number(str1) * Number(str2); break;
    case "/": expected = Number(str1) / Number(str2); break;

}

alert(expected);
});