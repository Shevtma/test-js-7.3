/*
Опишите кнопку отправки сообщений в чат с помощью конструктора класса, кнопка должна иметь определенный размер 
- ширина и высота числовое значение, тип кнопки (type = button), цвет кнопки (green), 
создайте метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке в формате 
// console.log(this.props) выводим все пропертиес

не забудьте создать экземпляр класса button - передать аргументы в наш конструктор класса. 
А также, проверьте в отдельной функции testButton(), что свойства этого экземпляра класса соответствуют заданным.
*/

class Button {
    constructor(btnType, btnHeight, btnWidth, btnColor){
        this.btnType = btnType;
        this.btnHeight = btnHeight;
        this.btnWidth = btnWidth;
        this.btnColor = btnColor;
    }

    onClick (){
        console.log(`Нажата кнопка: ${this.btnType}, ${this.btnHeight}, ${this.btnWidth}, ${this.btnColor}`)
    }

    testButton(typeValue, heightValue, widthValue, colorValue){
        let typeStatus = (this.btnType == typeValue) ? "Passed" : "Failed";
        let heightStatus = (this.btnHeight == heightValue) ? "Passed" : "Failed";
        let widthStatus = (this.btnWidth == widthValue) ? "Passed" : "Failed";
        let colorStatus = (this.btnColor == colorValue) ? "Passed" : "Failed";
        console.log(`Test for the button type ${typeStatus}\n`+
                    `Test for the button height ${heightStatus}\n`+
                    `Test for the button width ${widthStatus}\n`+
                    `Test for the button color ${colorStatus}\n`);
    }
}

const testValuesArray = ["button", 10, 40, "green"];

let myButton = new Button ("button", 10, 40, "green");
myButton.onClick();
myButton.testButton(...testValuesArray);

let anotherButton = new Button ("radio-button", 10, 10, "red");
anotherButton.onClick();
anotherButton.testButton(...testValuesArray);


function testButton2(btnUnderTest, typeValue, heightValue, widthValue, colorValue){
    let typeStatus = (btnUnderTest.btnType == typeValue) ? "Passed" : "Failed";
    let heightStatus = (btnUnderTest.btnHeight == heightValue) ? "Passed" : "Failed";
    let widthStatus = (btnUnderTest.btnWidth == widthValue) ? "Passed" : "Failed";
    let colorStatus = (btnUnderTest.btnColor == colorValue) ? "Passed" : "Failed";
    console.log(`Test for the button type ${typeStatus}\n`+
                `Test for the button height ${heightStatus}\n`+
                `Test for the button width ${widthStatus}\n`+
                `Test for the button color ${colorStatus}\n`);
}

console.log("Testing button with the testButton2 function");
testButton2(myButton, ...testValuesArray);
testButton2(anotherButton, ...testValuesArray);
