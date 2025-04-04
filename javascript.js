const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            
            try {
                display.textContent = eval(display.textContent.replace('x', '*').replace('÷', '/'));
            } catch {
                display.textContent = 'Error';
            }
        } else if (value === 'C') {
            
            display.textContent = ''; 
        } else {
            
            if (display.textContent === '') {
                display.textContent = value; 
            } else {
                display.textContent += value; 
            }
        }
    });
});