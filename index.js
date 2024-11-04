window.addEventListener("click", function () {
    console.log("== The window was clicked")
})

function handleBoxClick() {
        console.log("== A first box was clicked")
}

var boxes = document.getElementsByClassName("box")
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleBoxClick)
}

function handleButtonClick(event) {
    console.log("== A button was clicked")
    console.log(" -- event:", event)
}

var buttons = document.getElementsByClassName("in-box-button")

for (var i = 0; i < boxes.length; i++) {
    buttons[i].addEventListener("click", handleButtonClick)
}