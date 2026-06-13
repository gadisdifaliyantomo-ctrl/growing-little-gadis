let energy = 0;

const energyText =
document.getElementById("energy");

const fill =
document.getElementById("fill");

const worldStage =
document.getElementById("worldStage");

const bubble =
document.getElementById("bubble");

const latest =
document.getElementById("latestMessage");

const supportBtn =
document.getElementById("supportBtn");

const messageBtn =
document.getElementById("messageBtn");

const messageInput =
document.getElementById("messageInput");

const hearts =
document.getElementById("hearts");

const dialogs = [

"Aku senang kamu datang hari ini 🍓",
"Terima kasih sudah mendukungku 💖",
"Kita tumbuh bersama ya 🌸",
"Semangat untuk harimu ✨",
"Aku membaca semua pesan kalian 🥺"

];

function render(){

energyText.textContent = energy;

fill.style.width =
Math.min((energy/300)*100,100) + "%";

let world = "🍓";

if(energy >= 25) world = "🌱🍓";
if(energy >= 50) world = "🌱🌷🍓";
if(energy >= 100) world = "🏡🌷🍓";
if(energy >= 150) world = "☕🏡🌷🍓";
if(energy >= 200) world = "🎤☕🏡🌷🍓";
if(energy >= 300) world = "👑🎤☕🏡🌷🍓";

worldStage.textContent = world;
}

function spawnHeart(){

const heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML = "💖";

heart.style.left =
Math.random()*200 + "px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1200);

}

supportBtn.addEventListener("click",()=>{

energy++;

bubble.textContent =
dialogs[Math.floor(Math.random()*dialogs.length)];

spawnHeart();

render();

});

messageBtn.addEventListener("click",()=>{

const msg =
messageInput.value.trim();

if(!msg) return;

latest.textContent = msg;

bubble.textContent =
"💌 " + msg;

messageInput.value = "";

});

render();
