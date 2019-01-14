// Name: Bhupinder Singh 
// Date: January 14, 2019
// Student Number: C0727639
// Course: CSD 2214 Section 6
let countDown;
let timeInterval;
const endDate = document.querySelector('input[name="endDate"]');
//console.log(endDate.value);
const clock = document.querySelector('#clock');
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secndsSpan = clock.querySelector('.seconds');