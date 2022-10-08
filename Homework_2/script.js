function calculator()
{
alert("Калькулятор");
do {
    let z = +prompt("Введите первое число");
    let x = +prompt("Введите второе число");
    let i = prompt("Выберите знак выражения: + , - , * , / ");

    switch (i) {
        case "+":
            alert(z + x);
            break;
        case "-":
            alert(z - x);
            break;
        case "/":
            alert(z / x);
            break;
        case "*":
            alert(z * x);
            break;
        default:
            break;
    }
}
    while (confirm("Хотите еще использовать калькулятор?"));
}

function number()
{
    let pos=0;
    let neg=0;
    let zero=0;
    let even=0;
    let odd=0;
    for (let i=1; i<=10; i++ ) {
        let num = prompt("Введите число");
        if (num>0) {

            pos++;
        }
        if (num<0) {
            neg++;
        }
        if (num==0) {
            zero++;
        }
        if (num%2==0) {
            even++;
        }
        if (num%2!==0) {
            odd++;
        }
    };
   confirm(`Пользователь ввел 10 чисел, из них: ${pos} положительных
   чисел, ${neg} отрицательных чисел, ${even} четных чисел, ${odd} нечетных чисел и
   ${zero} нулей`)
}

function color (col,list2)
{
let color = document.getElementById (list2.value);
list2.value=="triangle"?color.style.borderBottomColor=col.value: color.style.backgroundColor=col.value;


}

