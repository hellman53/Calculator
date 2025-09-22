// Modern Calculator with Advanced Features
class ModernCalculator {
    constructor() {
        this.display = document.getElementById('display');
        this.historyDisplay = document.getElementById('history');
        this.memoryIndicator = document.getElementById('memory-indicator');
        
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
        this.waitingForNewInput = false;
        this.memory = 0;
        this.history = [];
        
        this.initializeEventListeners();
        this.updateDisplay();
    }
    
    initializeEventListeners() {
        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboardInput(e));
        
        // Prevent context menu on calculator
        document.getElementById('calculator').addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
    
    handleKeyboardInput(event) {
        const key = event.key;
        event.preventDefault();
        
        if (key >= '0' && key <= '9') {
            this.appendToDisplay(key);
        } else if (key === '.') {
            this.appendToDisplay('.');
        } else if (['+', '-', '*', '/'].includes(key)) {
            this.appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            this.calculate();
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {
            this.clearAll();
        } else if (key === 'Backspace' || key === 'Delete') {
            this.backspace();
        } else if (key === '%') {
            this.calculatePercentage();
        }
    }
    
    updateDisplay() {
        if (this.display.value === '' || this.display.value === '0') {
            this.display.value = '0';
        }
        this.updateMemoryIndicator();
    }
    
    updateMemoryIndicator() {
        if (this.memory !== 0) {
            this.memoryIndicator.classList.remove('hidden');
        } else {
            this.memoryIndicator.classList.add('hidden');
        }
    }
    
    showError() {
        this.display.value = 'Error';
        this.display.classList.add('error');
        setTimeout(() => {
            this.display.classList.remove('error');
            this.clearAll();
        }, 2000);
    }
    
    addToHistory(expression, result) {
        this.history.unshift({ expression, result });
        if (this.history.length > 10) {
            this.history = this.history.slice(0, 10);
        }
        this.historyDisplay.textContent = `${expression} = ${result}`;
    }
    
 
    safeEval(expression) {

        const sanitized = expression.replace(/[^0-9+\-*/().\s]/g, '');
        
        if (sanitized !== expression) {
            throw new Error('Invalid characters in expression');
        }
        
        try {
            
            const result = new Function('return ' + sanitized)();
            
            if (!isFinite(result)) {
                throw new Error('Result is not finite');
            }
            
            return result;
        } catch (error) {
            throw new Error('Calculation error');
        }
    }
    
    formatNumber(num) {
        if (typeof num !== 'number') {
            return num;
        }
        
       
        if (Math.abs(num) > 1e15 || (Math.abs(num) < 1e-6 && num !== 0)) {
            return num.toExponential(6);
        }
        
       
        return parseFloat(num.toPrecision(12)).toString();
    }
    
    appendToDisplay(value) {
        if (this.display.value === 'Error') {
            this.clearAll();
        }
        
        if (this.waitingForNewInput) {
            this.display.value = '';
            this.waitingForNewInput = false;
        }
        
        if (this.display.value === '0' && value !== '.') {
            this.display.value = value;
        } else {
 
            if (value === '.' && this.display.value.includes('.')) {
                return;
            }
            

            if (this.display.value.length < 15) {
                this.display.value += value;
            }
        }
    }
    
    calculate() {
        try {
            const expression = this.display.value;
            if (!expression || expression === 'Error') {
                return;
            }
            
            const result = this.safeEval(expression);
            const formattedResult = this.formatNumber(result);
            
            this.addToHistory(expression, formattedResult);
            this.display.value = formattedResult;
            this.waitingForNewInput = true;
        } catch (error) {
            this.showError();
        }
    }
    
    clearAll() {
        this.display.value = '0';
        this.historyDisplay.textContent = '';
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
        this.waitingForNewInput = false;
    }
    
    clearEntry() {
        this.display.value = '0';
    }
    
    backspace() {
        if (this.display.value === 'Error') {
            this.clearAll();
            return;
        }
        
        if (this.display.value.length > 1) {
            this.display.value = this.display.value.slice(0, -1);
        } else {
            this.display.value = '0';
        }
    }
    
    toggleSign() {
        if (this.display.value === 'Error' || this.display.value === '0') {
            return;
        }
        
        if (this.display.value.startsWith('-')) {
            this.display.value = this.display.value.substring(1);
        } else {
            this.display.value = '-' + this.display.value;
        }
    }
    
    calculatePercentage() {
        try {
            const value = parseFloat(this.display.value);
            if (isNaN(value)) {
                this.showError();
                return;
            }
            
            const result = value / 100;
            this.display.value = this.formatNumber(result);
            this.waitingForNewInput = true;
        } catch (error) {
            this.showError();
        }
    }
    
    calculateSquareRoot() {
        try {
            const value = parseFloat(this.display.value);
            if (isNaN(value) || value < 0) {
                this.showError();
                return;
            }
            
            const result = Math.sqrt(value);
            this.addToHistory(`√${value}`, this.formatNumber(result));
            this.display.value = this.formatNumber(result);
            this.waitingForNewInput = true;
        } catch (error) {
            this.showError();
        }
    }
    
    calculateSquare() {
        try {
            const value = parseFloat(this.display.value);
            if (isNaN(value)) {
                this.showError();
                return;
            }
            
            const result = value * value;
            this.addToHistory(`${value}²`, this.formatNumber(result));
            this.display.value = this.formatNumber(result);
            this.waitingForNewInput = true;
        } catch (error) {
            this.showError();
        }
    }
    
    calculateReciprocal() {
        try {
            const value = parseFloat(this.display.value);
            if (isNaN(value) || value === 0) {
                this.showError();
                return;
            }
            
            const result = 1 / value;
            this.addToHistory(`1/${value}`, this.formatNumber(result));
            this.display.value = this.formatNumber(result);
            this.waitingForNewInput = true;
        } catch (error) {
            this.showError();
        }
    }
    
    memoryRecall() {
        this.display.value = this.formatNumber(this.memory);
        this.waitingForNewInput = true;
    }
    
    memoryClear() {
        this.memory = 0;
        this.updateMemoryIndicator();
    }
    
    memoryAdd() {
        try {
            const value = parseFloat(this.display.value);
            if (!isNaN(value)) {
                this.memory += value;
                this.updateMemoryIndicator();
            }
        } catch (error) {
            this.showError();
        }
    }
    
    memorySubtract() {
        try {
            const value = parseFloat(this.display.value);
            if (!isNaN(value)) {
                this.memory -= value;
                this.updateMemoryIndicator();
            }
        } catch (error) {
            this.showError();
        }
    }
}


let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new ModernCalculator();
});


function appendToDisplay(value) {
    calculator.appendToDisplay(value);
}

function calculate() {
    calculator.calculate();
}

function clearAll() {
    calculator.clearAll();
}

function clearEntry() {
    calculator.clearEntry();
}

function backspace() {
    calculator.backspace();
}

function toggleSign() {
    calculator.toggleSign();
}

function calculatePercentage() {
    calculator.calculatePercentage();
}

function calculateSquareRoot() {
    calculator.calculateSquareRoot();
}

function calculateSquare() {
    calculator.calculateSquare();
}

function calculateReciprocal() {
    calculator.calculateReciprocal();
}

function memoryRecall() {
    calculator.memoryRecall();
}

function memoryClear() {
    calculator.memoryClear();
}

function memoryAdd() {
    calculator.memoryAdd();
}

function memorySubtract() {
    calculator.memorySubtract();
}

// Legacy function for backward compatibility
function clearDisplay() {
    calculator.clearAll();
}
