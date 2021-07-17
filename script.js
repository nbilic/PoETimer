
//HTML ELEMENTS
let difference = document.getElementById("difference");
let timerFrame = document.getElementById("img");

//ADD ON CLICK EVENT
timerFrame.addEventListener('click', () => {
    window.open('https://www.pathofexile.com/expedition');
})

let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


//CALCULATE TIME BETWEEN RELEASE DATE AND CURRENT DATE
let calcDiff = async () => {
    //HTML
    let hDay = document.getElementById("day");
    let hHour = document.getElementById("hour");
    let hMinute = document.getElementById("minute");
    let hSeconds = document.getElementById("seconds");

    //RELEASE DATE
    let _day = 23;
    let _hour = 22;
    let _minute = 00;
    let _second = 00;

    //ANIMATION
    let animate = (previous, current, element) => {
        if (previous != current) {
            element.animate([
                {
                    opacity: 1,
                    color: "crimson"
                },
                {
                    opacity: 1,
                    color: "white"
                }
            ], 900);
        }
    }

    //CALCULATE TIME
    let staticOffset = 0;
    let getTime = (current, previous, type) => {
        let result
        if (previous - current < 0) {
            result = (type - Math.abs(previous - current - staticOffset));
            staticOffset = 1;
            return result;
        }
        result = Math.abs(previous - current - staticOffset)
        staticOffset = 0;
        return result;
    }
    //CURRENT
    while (true) {
        let pDay = hDay.innerText;
        let pHour = hHour.innerText;
        let pMinute = hMinute.innerText;
        let pSeconds = hSeconds.innerText;

        let time = new Date();
        let day = time.getDate();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();

        hSeconds.innerHTML = getTime(second, _second, 60);
        hMinute.innerHTML = getTime(minute, _minute, 60);
        hHour.innerHTML = getTime(hour, _hour, 24);
        hDay.innerHTML = getTime(day, _day, 31);

        animate(pDay, hDay.innerText, hDay);
        animate(pHour, hHour.innerText, hHour);
        animate(pMinute, hMinute.innerText, hMinute);
        animate(pSeconds, hSeconds.innerText, hSeconds);
        await sleep(1000);
    }
}



calcDiff();
