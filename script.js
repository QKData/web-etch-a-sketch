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
            cell.addEventListener("mouseover", (e) => darkenColor(e.target));

            // Add cells to container
            container.appendChild(cell);
        };
    } else {
        alert("Please enter a number between 1 and 100");
    };
});

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function darkenColor(element) {
    let [r, g, b] = [0, 0, 0];
    let opacity = 0.1;

    if (!element.dataset.passes) {
        [r, g, b] = getRandomRGB();
        element.dataset.baseColor = `${r},${g},${b}`;
        element.dataset.passes = 1;
    } else {
        // Get existing color and increase darkness
        [r, g, b] = element.dataset.baseColor.split(',').map(Number);
        opacity = Math.min(1, Number(element.dataset.passes) * 0.1);
        element.dataset.passes = Number(element.dataset.passes) + 1;
    }

    // Calculate darkened color
    const darkenAmount = opacity;
    r = Math.floor(r * (1 - darkenAmount));
    g = Math.floor(g * (1 - darkenAmount));
    b = Math.floor(b * (1 - darkenAmount));
    
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}