const time = document.getElementById('clock-time'),
    dayDate = document.getElementById('date'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focusTask = document.getElementById('focusTask');

showTime();
setBg();
getName();
getFocusTask();

function showTime() {
    let currentDate = new Date(),
        currentHour = currentDate.getHours(),
        currentMinute = currentDate.getMinutes(),
        currentSecond = currentDate.getSeconds();

    const amPm = currentHour >= 12 ? 'PM' : 'AM';

    if (currentHour < 10) {
        currentHour = '0' + currentHour;
    }

    if (currentMinute < 10) {
        currentMinute = '0' + currentMinute;
    }

    if (currentSecond < 10) {
        currentSecond = '0' + currentSecond;
    }

    time.innerHTML = `${currentHour}:${currentMinute}:${currentSecond} ${amPm}`;

    currentDate.innerHTML = `${currentDate}`;

    setTimeout(showTime, 1000);
}

function setBg() {
    let currentDate = new Date(),
        currentHour = currentDate.getHours();

    if(currentHour < 12 && currentHour > 6) {
        
        document.body.style.backgroundImage = "url('./images/morning.png')"
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    } else if (currentHour < 18 && currentHour > 12 ) {
        document.body.style.backgroundImage = "url('./images/afternoon.png')";
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('./images/night.png')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }

}

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.wich == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocusTask() {
    if(localStorage.getItem('focusTask') === null) {
        focusTask.textContent = '[Enter Daily Goal]';
    } else {
        focusTask.textContent = localStorage.getItem('focusTask');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.wich == 13 || e.keyCode == 13) {
            localStorage.setItem('focusTask', e.target.innerText);
            focusTask.blur();
        }
    } else {
        localStorage.setItem('focusTask', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focusTask.addEventListener('keypress', setFocus);
focusTask.addEventListener('blur', setFocus)