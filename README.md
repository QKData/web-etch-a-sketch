# Etch-a-Sketch

A browser version of something between a sketchpad and an Etch-A-Sketch. This project demonstrates DOM manipulation skills and event handling in JavaScript.
Please check my two other branches for special modes: challengeRandomColor and challengeDarken.

## Features

- Customizable grid size (up to 100x100)
- Hover effect creates a trail like a pen
- Two special modes:
  1. Random Color Mode: Each cell gets a unique random color when hovered
  2. Progressive Darkening Mode: Each hover pass darkens the cell by 10%, becoming black after 10 passes

## How to Use

1. Open `index.html` in your browser
2. Hover over the grid cells to draw
3. Click the "Change Grid Size" button to:
   - Clear the current grid
   - Create a new grid with your specified number of squares per side
   - The new grid will maintain the same total space dimensions

## Technical Details

### Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)

### Key Implementations
- Dynamic grid generation using JavaScript
- Flexbox for grid layout
- Event listeners for hover effects
- DOM manipulation for grid creation and modification
- Color manipulation for special modes

## Code Structure

```
etch-a-sketch/
│
├── index.html
├── styles.css
└── script.js
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Project inspiration from The Odin Project curriculum
- Thanks to all contributors and testers