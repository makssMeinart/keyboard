
let userInput = document.querySelector(".userInput");

function keyboard(e) {
    let keys = document.querySelectorAll(".key");
    // Delete active class
    keys.forEach(item => {
        item.classList.remove("active");
        // Check if i11 value matches any of the keys.dataAttriube if does add class active on it
        if(e.code === item.getAttribute("data-key")) {
            item.classList.add("active");
        }
    })
}

// ваше событие здесь!!!
userInput.onkeyup = keyboard;