const container = document.querySelector(".container");

// Create 256 cells
for (let i = 1; i <= 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add("cell");

    // Set up hovering effect
    cell.addEventListener("mouseover", (e) => {
        e.target.classList.add("colored");
    });

    // Add cells to container
    container.appendChild(cell);
};