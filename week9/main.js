/**************************
 * Week 9
 * Window object and html5 api
 * 
 **************************/
//browser
//const window = this;
console.log(window.navigator.userAgent);
//window.location.assign('https://www.sitepoint.com/javascript/');
console.log(window.location.href);
//window.history.go(1);
//const popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');
//window.moveTo(0,0);
//popup.moveTo(0,0);
console.log(window.screen.height);

//cookies
document.cookie ='name=bob; page=myPage; dog=Syl; SameSite=Strict;';
const cookies = document.cookie.split("; ");
console.log(cookies[0]);

let minutesPassed = 0;
window.setInterval(()=>{
    minutesPassed++;
    document.open()
    document.write(`<h1>${minutesPassed} minute(s) have passed since you opened this!<h1>`);
},60000);
const test = document.querySelectorAll('[data-test]')[0].dataset;

//localStorage
localStorage.setItem('bird','word');
addEventListener('storage', (event) => {
    console.log(`The ${event.key} was updated from
    ${event.oldValue} to ${event.newValue} and saved in
    ${event.storageArea}`) }, false);
let item = localStorage.getItem('bird');
localStorage.item = 'more than words!';

//geolocation
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude},Longitude: ${position.coords.longitude}`);
    }
if(navigator)
{
    navigator.geolocation.getCurrentPosition(youAreHere);
    const id = navigator.geolocation.watchPosition(youAreHere);
}

//workers
const worker = new Worker('task.js');
worker.postMessage('Hello');
worker.addEventListener('message', (event) => {
    console.log(event.data);
    }, false);
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);    

//Notifications
if(window.Notification) {
    console.log(Notification.permission);
    Notification.requestPermission()
    .then((permission) => {
    if(Notification.permission === 'granted') {
        new Notification('Hello JavaScript!!!');
    }
    });
}

//Multimedia
