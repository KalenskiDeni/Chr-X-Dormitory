function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${month} ${day}, ${year}`;
    
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// this is to update the clock every second
setInterval(updateClock, 1000);

// this is to set the time
updateClock();
