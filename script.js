const sentences = [
    "Ona mistrzem jest, bo mistrza czyni trening.",
    "W czarnych okularach nie widzę przeszkód.",
    "Wzmocni mnie co nie zabije Nienawidzę głupich hijen albo hien.",
    "Muszę się skupić na finansach.",
    "Życie jak bajka, se lecę w klapkach Nike.",
    "Możesz mi mówić Daquan.",
    "Na okrągło, uśmiecham się udając, że żyję beztrosko.",
    "Kredki mam w piórniku.",
    "Znowu jadę sam, nie ma nikogo ze mną.",
    "Hipnotyzuje wzrokiem, okej Ona to diva jak Sophia Loren.",
    "2 mam na pewno.",
    "To właśnie jest Everest moich marzeń."
];

const today = new Date();

const start = new Date(today.getFullYear(), 0, 0);
const difference = today - start;
const oneDay = 1000 * 60 * 60 * 24;

const dayOfYear = Math.floor(difference / oneDay);

const index = dayOfYear % sentences.length;

document.getElementById("sentence").textContent = sentences[index];
