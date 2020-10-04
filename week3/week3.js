//Chapter 5: Objects
function showText() {
    return 'hi';
}
let name = 'bill';
let phone = '1-800-bro-love';
let object = {
    name,
    number: phone,
    arr: [1,2,3],
    'full name': 'bill lee bob',
    ['middle'+'Name']: 'lee',
    innerObject: {name, phone}
};
let instance = {};
object.showText = showText;
function writeGreeting() {
    console.log(`${object.showText()} ${object['middleName']} ${object.number} ${object.arr[0]} ${object["full name"]}`);
}
writeGreeting();
//truth expression
const bool = 0;
const test = (bool ? 'truth' : 'falsity');
console.log(test);
//symbols as key
const symbol = Symbol(2);
console.log(symbol.valueOf());
const bool2 = ('bane' in object);
console.log(bool2);
for(const key of Object.entries(object)) {
    console.log(key);
}    
delete object.name;
console.log(object.name);
console.log(object.innerObject);
object.number = "1-800-she-cool";
console.log(object.number);
function getObject({name, number}) {
    return {name, number};
}
console.warn(getObject({name:'bob',number:'1-800-sum-bros'}));
const dice = {
    sides: 20,
    roll() {
    return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log("d&d disadvantaged roll on d20:",Math.min(dice.roll(),dice.roll())); 
console.log(JSON.stringify(object));//returns a string of JSON format data, it removed showText since it is a function
console.log(object);   //returns a object

const birthday = new Date('1997 05 26 16:33:12 MST'); //gives a weird value
birthday.setDate(6);//Changed the day of the month to be Spence's birthday
console.log(birthday.getDay());//Monday
//Regex can be used to find patterns in a string


//DOM Chapter 6
console.log(document.getElementById('test1').innerHTML);
console.log(document.getElementsByClassName('note')[0].innerHTML);
const test1 = document.querySelector('#test1');
console.log(typeof test1);
console.log(test1.getAttribute('id'));
//Chapter 7
document.body.addEventListener("click", writeGreeting);