class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
        this.clear()
    }

//appendNumber 메서드(작업) 추가.
    appendNumber(number) {

//+= 는 복합대입연산자인데, this.displayContent = this.displayContent + number와 같은 의미를 가진다
        this.displayContent += number
    }

//this.displayContent = this.displayContent + operator 의 의미다.
    appendOperator(operator) {
        this.displayContent += operator
    }

//updateDisplay 메서드(작업)추가.
//this.displayElemnet의 값(value)에 this.displayContent를 담는다
    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }

    compute() {
        this.displayContent = eval(this.displayContent
            //"\u00D7" 는 ×, "\u00F7"는 ÷를 의미한다.
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        )
    }

}



const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')

const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})