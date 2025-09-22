# Calculator

A simple, modern web-based calculator built with HTML, CSS, and JavaScript.

## 🔍 Overview

This is a fully functional calculator web application featuring a sleek dark theme with orange accent buttons for operators. The calculator supports basic arithmetic operations including addition, subtraction, multiplication, and division.

## ✨ Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/)
- **Decimal Support**: Handle decimal numbers with precision
- **Error Handling**: Displays "Error" for invalid calculations
- **Clear Function**: Reset the calculator display with the 'C' button
- **Responsive Design**: Clean, modern UI that works across different screen sizes
- **Dark Theme**: Eye-friendly dark interface with orange operator highlights

## 🚀 Getting Started

### Prerequisites

No special requirements needed! Just a modern web browser.

### Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd Calculator
   ```

3. Open `index.html` in your web browser:
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" → your preferred browser, or
   - Use a local server (optional)

## 📁 Project Structure

```
Calculator/
├── index.html    # Main HTML structure
├── index.css     # Styling and layout
├── index.js      # Calculator functionality
└── README.md     # This file
```

## 🎮 Usage

1. **Number Input**: Click on number buttons (0-9) to input numbers
2. **Operations**: Click on operator buttons (+, -, *, /) to perform calculations
3. **Decimal Point**: Use the '.' button for decimal numbers
4. **Calculate**: Press '=' to execute the calculation
5. **Clear**: Press 'C' to clear the display and start over

## 💻 Technical Details

### HTML (`index.html`)
- Semantic structure with a calculator container
- Input field for display (readonly)
- Grid layout for calculator buttons
- Event handlers attached via onclick attributes

### CSS (`index.css`)
- Flexbox layout for centering
- CSS Grid for button arrangement (4-column layout)
- Modern design with rounded corners and hover effects
- Color scheme: Dark background with orange operator buttons

### JavaScript (`index.js`)
- `appendToDisplay()`: Adds numbers/operators to the display
- `calculate()`: Evaluates mathematical expressions using `eval()`
- `clearDisplay()`: Resets the calculator display
- Error handling for invalid calculations

## 🎨 Design Features

- **Dark Theme**: Primary background color `hsl(0, 0%, 15%)`
- **Orange Operators**: Highlighted operator buttons `hsl(38, 100%, 59%)`
- **Rounded Design**: 15px border radius for modern appearance
- **Large Display**: 5rem font size for easy readability
- **Hover Effects**: Interactive button states for better UX

## 🔧 Customization

You can easily customize the calculator by modifying:

- **Colors**: Update the HSL values in `index.css`
- **Size**: Adjust button dimensions and font sizes
- **Layout**: Modify the CSS Grid configuration
- **Functionality**: Add more operations in `index.js`

## 🚨 Known Limitations

- Uses JavaScript's `eval()` function for calculations (consider replacing with a safer parser for production use)
- No keyboard input support (only mouse/touch interactions)
- Limited to basic arithmetic operations

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements such as:
- Keyboard support
- Additional mathematical functions
- Scientific calculator features
- Improved error handling
- Theme customization options

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy calculating!** 🧮
