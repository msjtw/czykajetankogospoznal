const sentences = [
    "Believe in yourself.",
    "Small steps create big changes.",
    "Make today count.",
    "Keep moving forward.",
    "You are capable of more than you think.",
    "Every day is a new opportunity.",
    "Focus on what you can control."
];

const today = new Date();

const start = new Date(today.getFullYear(), 0, 0);
const difference = today - start;
const oneDay = 1000 * 60 * 60 * 24;

const dayOfYear = Math.floor(difference / oneDay);

const index = dayOfYear % sentences.length;

document.getElementById("sentence").textContent = sentences[index];