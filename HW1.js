//Task_1
// var age=4;
// if(age>=18)
// {
//     console.log("Совершеннолетний");
// }
// else
// {
//     console.log("Несовершеннолетний");
// }

//Task_2
// var year=2004;
// if(year%400==0||(year%4==0&&year%100!=0))
// {
//     console.log( ` ${year} - Високосный год `);
// }
// else
// {
//     console.log( ` ${year} - Не високосный год `);
// }

//Task_3
// var sum = 3000;
// if(sum>=1000)
// {
//     console.log(`Сумма покупки со скидкой -5% составляет ${sum*0.95} руб`);
// }
// else
// {
//     console.log(`Ваша покупка составляет ${sum} , меньше 1000 руб скидка не предоставляется`);
// }

//Task_4
var length_c = 8;
var sqrt_p = 16;
var diam_c = 2*(length_c/(2*3.14));
if(diam_c<=(sqrt_p/4))
{
    console.log(`Круг с длиной ${length_c} впишется в квадрат периметром ${sqrt_p}`);
}
else
{
    console.log(`Круг с длиной ${length_c} не впишется в квадрат периметром ${sqrt_p}`);
}
