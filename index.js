
let output = document.querySelector(".displaycalc")
output.value = ""

let btn1 = document.querySelectorAll(".num").forEach((e) => {
      e.addEventListener("click", (event1) => {
            output.value += event1.target.innerText
      })
});

let btn2 = document.querySelectorAll(".operator").forEach((e2) => {
      e2.addEventListener("click", (event2) => {
            output.value += event2.target.innerText
      })
});

let btn3 = document.querySelector(".clear")
btn3.addEventListener("click", () => {
      output.value = ""
});


let btn4 = document.querySelector(".one_clear")
btn4.addEventListener("click", () => {
      output.value = output.value.slice(0, -1)
});



let btn5 = document.querySelector(".sum")
btn5.addEventListener("click", () => {
      try {
            output.value = eval(output.value)
      }
      catch (error) {
            output.value = "ERROR"
      }
});



