function getMaxNumber(k=123) {
    let n = k.toString();
    let max = n[0];
    for(let i = 0;i<n.length;i++){
        if(n[i]>max){
            max = n[i];
        }
    }
    return max;
}
function myPow(number = 2,k = 4) {
    let n = number;
    for (let i = 1;i<k;i++){
        number*= n;
    }
    return number;
}
function formatName(name) {
    name = name.toLowerCase();
    let mainLeter = name[0].toUpperCase();
    let str = name.slice(1,name.length);
    return mainLeter + str;
}
const getBill = (bill)=> bill - bill* 0.195;

const getRandomNumber = (n, m)=> n + Math.round(Math.random()*(m - n));
function countLetter( symbol, str) {
    let k = 0;
    symbol = symbol.toLowerCase();
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            k++;
        }
    }
    return k;
}
const convertMoney = (str)=>{
    let uah = false, dollar = false,k, n;
    str = str.toLowerCase();
    if(str.includes('uah')){
        uah = true;
        n = parseFloat(str.slice(0, str.length-3)) / 25;
        return `${n}$`;
    }else if(str.includes('$')){
        dollar = true;
        n = parseFloat(str.slice(0, str.length-1)) * 25;
        return `${n}UAH`
    }else console.log(`I don't see $ or UAH`);
};
function randomPasword(length = 8) {
    let password = '';
    let k;
    for(let i = 0;i<length;i++){
        k = Math.round(Math.random()*9);
    password +=k;
    }
    return password;
}
function deleteLetters(symbol,str) {
    let newStr = '';
    symbol = symbol.toLowerCase();
    str = str.toLowerCase();
    for(let i = 0;i<str.length;i++){
        if(str[i]!=symbol){
            newStr+=str[i];
        }
    }
    return newStr;
}
function isPalindrom(str) {
    let newStr = '';
    for(let i = 0;i<str.length;i++){
        if(str[i]!=' '){
            newStr += str[i];
        }
    }
    let palid = true;
    newStr = newStr.toLowerCase();
    for(let i = 0;i<newStr.length/2;i++){
        if(newStr[i]!==newStr[newStr.length - i -1]){
            palid = false;
            break;
        }
    }
    return palid;
}
function del(str) {
    let newStr = '';
    str.toLowerCase();
    for(let i = 0;i<str.length;i++){
        let k = 0;
        for (let j = 0; j<str.length;j++){
            if(str[i]===str[j]){
                k +=1;
            }
        }
        if(k<2){
            newStr += str[i];
        }

    }
    return newStr;

}
document.writeln(`Максимальна цифра числа : ${getMaxNumber(123.4393)} <br>`);
document.writeln(`Піднесення до степеня : ${myPow(2,4)} <br>`);
document.writeln(`Форматування імені : ${formatName('maaaXX')} <br>`);
document.writeln(`Зарплата після оплати податку : ${getBill(1000)} <br>`);
document.writeln(`Рандомне число від n до m : ${getRandomNumber(2,7)}<br>`);
document.writeln(`Підрахунок кількості входжень даного символу  в стрічку : ${countLetter('a','bananaa')} <br>`);
document.writeln(`Конвертація грошей : ${convertMoney('100UAH')} <br>`);
document.writeln(`Рандомний пароль певної довжини : ${randomPasword(4)} <br>`);
document.writeln(`Видалити всі входження символа зі стрічки : ${deleteLetters('a','banan')} <br>`);
document.writeln(`Чи є стрічка паліндромом : ${isPalindrom('mam')} <br>`);
document.writeln(`Видалити зі стрічки символи які зустрічаються більше ніж 1 раз : ${del('car was good')} <br>`);