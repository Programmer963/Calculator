import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface calcBtns {
  color?: string;
  fontColor?: string;
  cols: number;
  rows: number;
  text?: string;
  type: string;
  click?: any;
  height?: string; 
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  total: any = 0
  operator = null;
  waitForSecondNumber = false;
  firstOperand: any = null;
  //calcHistory: string[] = [];
  calcHistory: string = '';
  equation: any = null

  btns: calcBtns[] = [
    { cols: 4, rows: 1, type: 'history' },
    { cols: 4, rows: 1, type: 'field' },
    
    { text: 'С', cols: 4, rows: 1, height: "65px", fontColor: "white", color: "red", type: 'button', click: 'clear' },
    { text: '√', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'sqrt' },
    { text: "%", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'operation' },
    { text: "±", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'reverse' },
    { text: '!', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'factorial' },
    { text: 'cos', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4E505F", type: 'button', click: 'cos' },
    { text: 'sin', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4E505F", type: 'button', click: 'sin' },
    { text: 'tg', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4E505F", type: 'button', click: 'tg' },
    { text: '| |', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'modul' },
    { text: 'ln', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4E505F", type: 'button', click: 'ln' },
    { text: 'lg', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4E505F", type: 'button', click: 'lg' },
    { text: '^', cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4E505F", type: 'button', click: 'operation' },
    { text: "/", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'operation' },
    { text: "7", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "8", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "9", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "*", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'operation' },
    { text: "4", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "5", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "6", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "-", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'operation' },
    { text: "1", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "2", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "3", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "+", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'operation' },
    { text: ".", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'decimal' },
    { text: "0", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'number' },
    { text: "<", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#2E2F38", type: 'button', click: 'clear' },
    { text: "=", cols: 1, rows: 1, height: "65px", fontColor: "white", color: "#4B5EFC", type: 'button', click: 'operation' }
  ];

  eventClick(event: string, param: any = null) {
    
    switch (event) {
      case "number":
        if (this.waitForSecondNumber) {
          this.total = param
          this.waitForSecondNumber = false;

        }
        else {
          //this.firstOperand = Number(this.total)
          this.total = (this.total === 0) ? Number(param) : Number('' + this.total + param)
        }

        break;
      case 'reverse':
        this.total *= -1
        break;
      case 'cos':
        this.total = Math.cos(this.total)
        break
      case 'sin':
        this.total = Math.sin(this.total)
        break
      case 'tg':
        this.total = Math.tan(this.total)
        break
      case 'factorial':
        if (this.total === 0 || this.total === 1) {
          this.total = 1
        }
        else {
          let res = 1
          for (let i = 0; i < this.total; i++) {
            res *= (i + 1)
          }
          this.total = res
        }
        break
      case 'lg':
        this.total = Math.log10(this.total)
        break
      case 'ln':
        this.total = this.ln(this.total)
        break
      case 'modul':
        this.total = Math.abs(this.total)
        break
      case 'sqrt':
        this.total = Math.sqrt(this.total)
        break
      case "operation":
        if (this.firstOperand === null) {
          this.firstOperand = Number(this.total);
        } else if (this.operator) {
          if(this.operator !== '='){
            this.equation = `${this.firstOperand} ${this.operator} ${this.total}`;
          }
          const result = this.doCalculation(this.operator, Number(this.total));
          this.total = String(result);
          if(this.operator !== '='){
            //this.calcHistory.push(`${this.equation} = ${this.total}`);
            this.calcHistory = `${this.equation} = ${this.total}`;
          }
          this.firstOperand = result;
        }


        this.waitForSecondNumber = true;
        this.operator = param;

        break;

      case "clear":
        this.total = 0
        this.firstOperand = null
        this.operator = null
        this.waitForSecondNumber = false
        break;
      case "decimal":
        if (!this.total.includes('.')) 
        {
          this.total += '.'
        }
        break;
    }
  }



  private ln(x: number, tolerance: number = 1e-10): number {
    if (x <= 0) {
      throw new Error("Аргумент ln должен быть положительным числом");
    }
    if (x > 2) {
      let n = Math.floor(x / 2);
      x /= Math.pow(2, n);
    }

    let result = 0;
    let term = x - 1;
    let n = 1;

    while (Math.abs(term) > tolerance) {
      result += term;
      n += 1;
      term = ((n % 2 === 0 ? -1 : 1) * Math.pow(x - 1, n)) / n;
    }

    return result;
  }


  private doCalculation(operator: string, secondNumber: number) {
    switch (operator) {
      case "+":
        return this.firstOperand += secondNumber
      case "-":
        return this.firstOperand -= secondNumber
      case "*":
        return this.firstOperand *= secondNumber
      case "/":
        if (secondNumber === 0) {
          return 'Делить на 0 нельзя!'
        }
        return this.firstOperand /= secondNumber
      case '%':
        return secondNumber * (this.firstOperand / 100)
      case '^':
        return Math.pow(this.firstOperand, secondNumber)
      case "=":
        //this.calcHistory.push(`${this.equation} = ${this.total}`);
        return secondNumber;
    }
  }


}
