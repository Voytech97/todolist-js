const calendar = document.getElementById('calendar');

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-`+"0"+`${month}-${year}`;
calendar.innerHTML = 'Today is '+currentDate;