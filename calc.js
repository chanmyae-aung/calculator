const number = document.querySelectorAll(".number");
const operator = document.querySelector(".operator");
const display = document.querySelector(".display");
const result = document.getElementById("result");

number.forEach(el=>{
    el.addEventListener("click",function(value){
        display.innerText += value.target.innerText;
    })
})

result.addEventListener("click",function(){
    console.log(eval(display.innerText))
    display.innerText = eval(display.innerText)
    
})



