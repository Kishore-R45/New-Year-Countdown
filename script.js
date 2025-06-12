const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYear - now;

    const second = 1000;
    const minute = 60 * second;
    const hour   = 60 * minute;
    const day    = 24 * hour;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d < 10 ? `0${d}` : d;
    document.getElementById('hours').innerText = h < 10 ? `0${h}` : h;
    document.getElementById('minutes').innerText = m < 10 ? `0${m}` : m;
    document.getElementById('seconds').innerText = s < 10 ? `0${s}` : s;
}

function updateCurrentTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = `Current Time: ${timeStr}`;
}

setInterval(() => {
    updateCountdown();
    updateCurrentTime();
}, 1000);

updateCountdown();
updateCurrentTime();
