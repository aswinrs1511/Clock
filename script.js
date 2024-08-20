setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    // Calculate the rotation for each hand
    const hr_rotate = 30 * hr + min / 2; // 360 degrees / 12 hours = 30 degrees per hour
    const min_rotate = 6 * min; // 360 degrees / 60 minutes = 6 degrees per minute
    const sec_rotate = 6 * sec; // 360 degrees / 60 seconds = 6 degrees per second

    // Apply the rotation to the clock hands
    document.getElementById('hour').style.transform = `rotate(${hr_rotate}deg)`;
    document.getElementById('minute').style.transform = `rotate(${min_rotate}deg)`;
    document.getElementById('second').style.transform = `rotate(${sec_rotate}deg)`;
}, 1000);
