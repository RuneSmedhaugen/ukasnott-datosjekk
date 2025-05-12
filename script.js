updateView();

function html(){
    let date = new Date();
    document.getElementById("app").innerHTML =/*HTML*/ `
    <div id="main"> 
    <h1>How many days until the next Friday the 13th?</h1>
    <input type="date" id="date" value="${date.toISOString().split('T')[0]}">
    <button id="calculate" onclick="calculateDate()">Calculate</button>
    <div id="result">
    <div id="result">
    <h2>Result</h2>
    <div id="loadingPillar">
        <div id="pillarFill"></div>
        <div id="pillarText">0%</div>
    </div>
    <p id="days"></p>
</div>



    </div>
    `
};

function calculateDate() {
    const daysElement = document.getElementById("days");
    const fill = document.getElementById("pillarFill");
    const text = document.getElementById("pillarText");
    const body = document.body;

    daysElement.textContent = "🤔 Loading the cursed prophecy...";
    daysElement.classList.add("loading");

    const suspenseAudio = new Audio('/sound/suspense.mp3');
    suspenseAudio.play();

    fill.style.height = `0%`;
    text.textContent = `0%`;

    let progress = 0;
    const duration = 10000;
    const intervalTime = 120;
    const steps = duration / intervalTime;
    let step = 0;

    const progressInterval = setInterval(() => {
        step++;
        progress = Math.min(100, Math.floor((step / steps) * 100));
        fill.style.height = `${progress}%`;
        text.textContent = `${progress}%`;

        if (step >= steps) {
            clearInterval(progressInterval);

            let dotm = 13;
            let dotw = 5;
            let date = new Date(document.getElementById("date").value);
            let originalDate = new Date(date);

            if (date.getDate() === dotm && date.getDay() === dotw) {
                
                body.classList.add("curse-flash");
                setTimeout(() => body.classList.remove("curse-flash"), 5000);

                
                const jumpscareAudio = new Audio('/sound/jumpscare.mp3');
                jumpscareAudio.play();

                daysElement.textContent = "💀💀Today is Friday the 13th!💀💀";
            } else {
                while (true) {
                    date.setDate(date.getDate() + 1);
                    if (date.getDate() === dotm && date.getDay() === dotw) break;
                }

                const howmanydays = Math.floor((date - originalDate) / (1000 * 60 * 60 * 24));
                daysElement.textContent = `${howmanydays} days until the next Friday the 13th`;
            }

            daysElement.classList.remove("loading");
        }
    }, intervalTime);
}






function updateView(){
html();
}