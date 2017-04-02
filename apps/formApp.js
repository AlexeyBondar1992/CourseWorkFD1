function srcChange(model) {
    document.querySelector('#image').querySelector('img').setAttribute('src',`images/form/${model}.jpg` );
}

function yearChange(model) {
    switch (model) {
    case 'e23':
        yearChanger(1977,1986);
        break;
    case 'e32':
        yearChanger(1986,1994);
        break;
    case 'e38':
        yearChanger(1994,2001);
        break;
    case 'e65':
        yearChanger(2001,2008);
        break;
    case 'f01':
        yearChanger(2008,2015);
        break;
    }
}

function yearChanger(yearStart,yearEnd) {
    document.querySelector('#year').setAttribute('min',yearStart );
    document.querySelector('#year').setAttribute('max',yearEnd );
    document.querySelector('#year').setAttribute('placeholder',yearStart );
}

function clickListenerForModel(event) {
    var model = event.target.value;
    srcChange(model);
    yearChange(model);
}

document.body.querySelector('#model').addEventListener('click', clickListenerForModel);


var registrationNumber= document.querySelector('#image').querySelectorAll('p');
function clickListenerForRegNumber(event) {
    registrationNumber[0].textContent = event.target.value;
}
function clickListenerForSeries(event) {
    registrationNumber[1].textContent = event.target.value;
}
function clickListenerForRegion(event) {
    registrationNumber[2].textContent=`- ${event.target.value}`;
}


document.body.querySelector('#regNumber').addEventListener('input', clickListenerForRegNumber);
document.body.querySelector('#series').addEventListener('input', clickListenerForSeries);
document.body.querySelector('#region').addEventListener('change', clickListenerForRegion);