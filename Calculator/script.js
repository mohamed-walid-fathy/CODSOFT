class Calculator{
    constructor(previousoperandTextElement, currentoperandTextElement) {
        this.previousoperandTextElement = previousoperandTextElement
        this.currentoperandTextElement = currentoperandTextElement
        this.clear()
    }



    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    
    delete() {

        
    }

    appendNumber(number) {
        if (number == '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        
    }
    
    chooseOperation(operation) {

        
    }
    
    compute() {

        
    }

    updateDisplay() {
        this.currentoperandTextElement.innerText = this.currentOperand
        
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-del]')
const acButton = document.querySelector('[data-ac]')
const previousoperandTextElement = document.querySelector('[data-previous]')
const currentoperandTextElement = document.querySelector('[data-current]')


const calculator = new Calculator(previousoperandTextElement,currentoperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

