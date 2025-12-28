const music = document.getElementById("music");
const response = document.getElementById("response");
const noBtn = document.querySelector(".no");

let noCount = 0;

function openEnvelope() {
    const env = document.querySelector(".envelope");
    env.classList.add("open");
    document.getElementById("paperSound").play();

    setTimeout(() => {
        env.style.display = "none";
        document.querySelector(".card").classList.remove("hidden");
    }, 900);
}

function forgive() {
    document.getElementById("title").innerText = "🎉 FRIENDSHIP RESTORED 🎉";
    document.getElementById("message").innerHTML =
        "YESSS 🥹<br><br>" +
        "I solemnly swear to:<br>" +
        "✔ Think before speaking<br>" +
        "✔ Use my brain more often 🧠<br>" +
        "✔ Value you endlessly ❤️";

    response.innerText = "Achievement unlocked: Forgiven 🏆";
    response.style.color = "#27ae60";

    music.play();
    launchConfetti();
}

function notYet() {
    noCount++;
    const messages = [
        "Okay 😔 I understand...",
        "Still no? I deserve this 😭",
        "I’m literally begging now 🧎‍♂️",
        "This button is hurting my feelings 💔",
        "Alright I surrender 😵‍💫"
    ];

    response.innerText = messages[Math.min(noCount - 1, messages.length - 1)];
    response.style.color = "#e74c3c";
    moveNoButton();
}

function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function launchConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.top = "50%";
        confetti.style.left = "50%";
        confetti.style.borderRadius = "50%";

        document.body.appendChild(confetti);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 300;

        confetti.animate([
            { transform: "translate(-50%, -50%)", opacity: 1 },
            {
                transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`,
                opacity: 0
            }
        ], { duration: 1200 });

        setTimeout(() => confetti.remove(), 1200);
    }
}
