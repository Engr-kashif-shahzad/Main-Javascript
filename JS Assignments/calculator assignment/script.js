let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value == "=") {
            try {
               
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
            input.value = string;
        } else if (value == "AC") {
            string = "";
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

