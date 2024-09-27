const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");

inputs.forEach((input, index1) =>{
    input.addEventListener("keyup", (e) => {
        const currenInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        if(currenInput.value.length > 1){
           currenInput.value = ""; 
           return;
        }
        if(nextInput && nextInput.hasAttribute("disabled") && currenInput.value !== ""){
          nextInput.removeAttribute("disabled");
          nextInput.focus();
        }
        if(e.key === "backspace"){
            inputs.forEach((input, index2) => {
              if(index1 <= index2 && prevInput){
                input.setAttribute("disabled", true);
                currenInput.value = "";
                prevInput.focus();
              }
            });
        }
        if(!inputs[3].disabled && inputs[3].value !== ""){
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
});


window.addEventListener("load", () => inputs[0].focus())