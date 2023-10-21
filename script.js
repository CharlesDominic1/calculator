// document.querySelector("h1").addEventListener("click", handClick);
// function handClick() {
//     alert ("I am a calculator");
// }

function calc (){
    let value1 = parseInt(document.querySelector(".value1").value);
    let value2 = parseInt(document.querySelector(".value2").value);
    // console.log(value1);
    let opar = document.querySelector(".opar").value;
    // console.log(opar);
    let result;
    if (opar === "add") {
       result = value1 + value2;
    } else if (opar==="sub") {
        result = value1 - value2;
    } else if (opar ==="mul") {
        result = value1 * value2;
    }  else if (opar ==="div") {
        result = value1 / value2;
     } else {
        result = "This value is not in our calculator";
     }
     document.querySelector(".our_result").innerHTML = result;
}