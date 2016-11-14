(function() {
  'use strict';

// creating table
function buildTable(row, col) {
  let table = document.getElementsByClassName("table")[0];
    for (let i = 0;  i < row; i++) {
      let tr = document.createElement("tr");
      for (let i = 0; i < col; i++) {
        let td = document.createElement("td");
        td.className += "cell";
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
}
buildTable(45, 45);
let pickedColor = "";

// Add eventlistners to cells to assign a new color
let cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    cells[i].style.background = pickedColor;
  });
}

// Add EventListners for update pickedColor
//and added to show what color was picked

let colorButtons = document.getElementsByClassName("colorRound");
for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", function() {
    pickedColor = window.getComputedStyle(colorButtons[i]).backgroundColor;
    document.getElementById("colorShow").style.backgroundColor = pickedColor;
  });
}

//Bonus 1

// Paint On drag

function setColor(event) {
  event.target.style.background = pickedColor;
}

function setOnHover() {
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", setColor, false);
  }
}
//removing if not mousedown
function deleteOnHover() {
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("mouseover", setColor, false);
  }
}

document.addEventListener("mousedown", setOnHover);
document.addEventListener("mouseup", deleteOnHover);

})();
