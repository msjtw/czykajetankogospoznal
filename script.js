const sentences = [
    "Ona mistrzem jest, bo mistrza czyni trening.",
    "W czarnych okularach nie widzę przeszkód.",
    "Wzmocni mnie co nie zabije Nienawidzę głupich hijen albo hien.",
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

const riddles = [
    {
        question: 'Jak nazywa się piosenka z której pochodzi wers: "Ona ma wydziabane uzi Kupiłem sobie nowe buty"?',
        answer: "Tymek - 80's"
    },
    {
        question: "Co się kręci jak loki Marylin Monroe w piosence Marylin Monroe - Tymek?",
        answer: "Kręcą się sumy"
    },
    {
        question: "Od kiedy do kiedy ona śpiewa acapella w piosence Martin Shrkreli - Schafter?",
        answer: "od niedzieli do niedzieli"
    },
    {
        question: "Gdzie ma przesiadkę Kukon w piosence 4 am in Metawers?",
        answer: "W Paryżu"
    },
    {
        question: "Na co rozebrał zdania Przyłu w piosence Usta?",
        answer: "na elementy snów"
    },
    {
        question: "Gdzie zamawiają shoty autorzy piosenki Kamikaze?",
        answer: "przy barze"
    },
    {
        question: "Jakim samochodem jeździł chłopak Jagody w 2025 roku?",
        answer: "Ford Mustang"
    },
    {
        question: "Czy można pasować zanim się zobaczy flopa?",
        answer: "Nie, jeśli nazywasz się Kajetan"
    },
    {
        question: "Piłat właśnie leży na podłodze. Co wydarzyło się 5 sekund wcześniej?",
        answer: "Kajetan dostał karetę na riverze (miał 72o)"
    }
];

const today = new Date();

const start = new Date(today.getFullYear(), 0, 0);
const difference = today - start;
const oneDay = 1000 * 60 * 60 * 24;

const dayOfYear = Math.floor(difference / oneDay);

const sentenceIndex = dayOfYear % sentences.length;
const riddleIndex = dayOfYear % riddles.length;

document.getElementById("sentence").textContent = sentences[sentenceIndex];
document.getElementById("riddle-question").textContent = riddles[riddleIndex].question;
document.getElementById("riddle-answer").textContent = riddles[riddleIndex].answer;

const showAnswerBtn = document.getElementById("show-answer");
const answerText = document.getElementById("riddle-answer");

showAnswerBtn.addEventListener("click", () => {
    if (answerText.style.display === "none") {
        answerText.style.display = "block";
        showAnswerBtn.textContent = "Ukryj odpowiedź";
    } else {
        answerText.style.display = "none";
        showAnswerBtn.textContent = "Pokaż odpowiedź";
    }
});
