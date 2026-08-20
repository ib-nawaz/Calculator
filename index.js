
// let btn = document.querySelectorAll(".num").forEach((v) => {

//    v.addEventListener("click", (q) => {
//       display.value += q.target.value;

//    })

// })

// let btn2 = document.querySelectorAll(".operator:not(.clear):not(.one_clear)");

// btn2.forEach((vv) => {
//     vv.addEventListener("click", (qq) => {
//         display.value += qq.target.value;
//     });
// });
// let btn3 = document.querySelector(".sum")
// btn3.addEventListener("click", (qqq) => {
//    display.value = eval(display.value)
// })
// let btn4 = document.querySelector(".clear")
// btn4.addEventListener("click", (rt) => {
//    display.value = ""
// })



// let btn5 = document.querySelector(".one_clear")
// btn5.addEventListener("click", () => {
//    display.value =display.value.slice(0, -1)
// })

let output = document.querySelector(".displaycalc")
output.value = ""

let btn1 = document.querySelectorAll(".num").forEach((e) => {
   e.addEventListener("click",(event1)=>{
         output.value +=event1.target.innerText
   })
});

let btn2 = document.querySelectorAll(".operator").forEach((e2) => {
   e2.addEventListener("click",(event2)=>{
         output.value += event2.target.innerText
   })
});

let btn3 = document.querySelector(".clear")
   btn3.addEventListener("click",()=>{
         output.value = ""
   });

   
let btn4 = document.querySelector(".one_clear")
btn4.addEventListener("click", () => {
      output.value = output.value.slice(0, -1)
});
let btn5 = document.querySelector(".sum")
btn5.addEventListener("click", () => {
      let btn5 = document.querySelector(".sum")
btn5.addEventListener("click", () => {

//     if (
//         output.value.includes("++") ||
//         output.value.includes("--") ||
//         output.value.includes("**") ||
//         output.value.includes("//") ||
//         output.value.includes("+-") ||
//         output.value.includes("-+")
//     ) {
//         output.value = "ERROR"
//     } 
//     else {
//         output.value = eval(output.value)
//     }
// })
// });



