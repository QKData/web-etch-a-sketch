const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    // Clear existing grid
    container.innerHTML = "";
    
    // Create n * n cells
    let n = prompt("How many squares per side do you want? (Max 100)");
    
    // Validate input
    n = parseInt(n);
    if (n > 0 && n <= 100) {  
        for (let i = 1; i <= n * n; i++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");

            // Calculate new cell size based on container size
            cell.style.width = `calc(100% / ${n})`;
            cell.style.height = `calc(100% / ${n})`;

            // Set up hovering effect (random color)
            cell.addEventListener("mouseover", (e) => {
                if (!e.target.style.backgroundColor) {
                    e.target.style.backgroundColor = getRandomColor();
                };
            });

            // Add cells to container
            container.appendChild(cell);
        };
    } else {
        alert("Please enter a number between 1 and 100");
    };
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}