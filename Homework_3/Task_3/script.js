var name = prompt("Введите Вашу Фамилию: ")
const allProm = new Promise(resolve => resolve(name))
    .then(value => value.toUpperCase())
    .then(value => Array.from(value))
    .then(value => value.reverse())
    .then(value => value.shift())
    .then(value => alert(value));