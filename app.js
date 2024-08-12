const button = document.querySelector(".btn");
const container = document.querySelector(".container");
const body = document.querySelector("body");

// Resizing grid
button.addEventListener("click", resizingGrid);
  
function resizingGrid()  {
  let newGridSize = prompt("How many squares should be in the grid?");

  while (newGridSize > 100 || newGridSize < 1 || newGridSize === NaN) {
    newGridSize = prompt("Enter a number less than 100 and greater than 0");
  }

  createGrid(newGridSize);
};

// Creating grid
function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;
  const totalSize = size * size;

  for (let i = 0; i < totalSize; i++) {
    const divs = document.createElement("div");
    divs.classList.add("square");
    divs.style.width = `${squareSize}px`;
    divs.style.height = `${squareSize}px`;

    container.appendChild(divs);

    divs.addEventListener("mouseover", () => {
      divs.style.backgroundColor = generateNewColor();
    });
  }
}

createGrid(16);

// Random color
function generateNewColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r}, ${g}, ${b})`;
  console.log(color);
  return color;
}
