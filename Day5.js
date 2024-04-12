let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let timer;

function StartStop() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
                if (minutes >= 60) {
                    hours++;
                    minutes = 0;
                }
            }
            let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            document.getElementById("stopwatch").innerText = formattedTime;
            document.getElementById("startstop").innerText = "Stop";
        }, 1000);
    } else {
        document.getElementById("startstop").innerText = "Start";
        clearInterval(timer);
        isRunning = false;
    }
}

function Reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("stopwatch").innerText = formattedTime;
    document.getElementById("startstop").innerText = "Start";
}
