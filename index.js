<<<<<<< HEAD
window.addEventListener("click", function () {
    console.log("== The window was clicked")
})

function handleBoxClick() {
        console.log("== A first box was clicked")
=======
window.addEventListener("click", function (event) {
  console.log("== The window was clicked")
  console.log("  -- event.target:", event.target)
  console.log("  -- event.currentTarget:", event.currentTarget)
})

function handleBoxClick(event) {
  console.log("== A box was clicked")
  console.log("  -- event.target:", event.target)
  console.log("  -- event.currentTarget:", event.currentTarget)
>>>>>>> db82504f8c959c4f45bd0a2e8d3d5c254ab81445
}

var boxes = document.getElementsByClassName("box")
for (var i = 0; i < boxes.length; i++) {
<<<<<<< HEAD
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
=======
  boxes[i].addEventListener("click", handleBoxClick)
}

function handleButtonClick(event) {
  console.log("== A button was clicked")
  console.log("  -- event:", event)
  var clickedButton = event.target
  var box = clickedButton.parentNode
  box.classList.toggle("highlighted")
  event.stopPropagation()
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i < boxes.length; i++) {
  buttons[i].addEventListener("click", handleButtonClick)
}

var link = document.getElementById("website-link")
link.addEventListener("click", function (event) {
  console.log("== The link was clicked")
  event.preventDefault()
})
>>>>>>> db82504f8c959c4f45bd0a2e8d3d5c254ab81445
