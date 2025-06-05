
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('themeToggleButton');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark-theme', currentTheme === 'dark');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const main = document.querySelector('main');
        header.classList.toggle('dark-theme', currentTheme === 'dark');
        footer.classList.toggle('dark-theme', currentTheme === 'dark');
        main.classList.toggle('dark-theme', currentTheme === 'dark');
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            const isDarkTheme = document.body.classList.toggle('dark-theme');
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            const main = document.querySelector('main');
            header.classList.toggle('dark-theme', isDarkTheme);
            footer.classList.toggle('dark-theme', isDarkTheme);
            main.classList.toggle('dark-theme', isDarkTheme);

            localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        });
    }
    const shelters = document.querySelectorAll('.shelter-content');
    shelters.forEach(shelter => {
        const image = shelter.querySelector('.shelter-image');
        const title = shelter.querySelector('.shelter-title');

        shelter.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            title.style.display = 'block';
        });

        shelter.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
            title.style.display = 'none';
        });
    });
});

const questions = [
    {
        text: "Какой у вас образ жизни?",
        answers: [
            { text: "Я ходячая батарейка", type: "active" },
            { text: "Хочу лежать со своим другом на чем ни будь мягком", type: "calm" }
        ]
    },
    {
        text: "Нравится ли вам проводить время на улице или вы предпочитаете оставаться дома?",
        answers: [
            { text: "Гулять?!", type: "yes" },
            { text: "Люблю поваляться на диване и расслабиться", type: "no" }
        ]
    },
    {
        text: "Нравится ли вам, когда питомец проявляет свою привязанность, или вы предпочитаете, чтобы он был более самостоятельным?",
        answers: [
            { text: "Хочу проводить с ним всё своё свободное время", type: "affectionate" },
            { text: "Самостоятельный мне подходит больше", type: "independent" }
        ]
    },
    {
        text: "Какое у вас жильё?",
        answers: [
            { text: "Квартира", type: "apartment" },
            { text: "Дом", type: "house" },
            { text: "Есть и дом и квартира", type: "both" }
        ]
    },
    {
        text: "Готовы ли вы к пушистым клочкам шерсти в доме по углам?",
        answers: [
            { text: "Конечно", type: "yes" },
            { text: "Нет!", type: "no" }
        ]
    }
];

let currentQuestionIndex = 0;
let petType = '';
let size = '';
let furType = '';

function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';

    const question = questions[currentQuestionIndex];
    const questionText = document.createElement('h3');
    questionText.textContent = question.text;
    questionContainer.appendChild(questionText);

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.onclick = () => handleAnswer(answer.type);
        questionContainer.appendChild(button);
    });
}

function handleAnswer(answerType) {
    switch (currentQuestionIndex) {
        case 0:
            petType = (answerType === 'active') ? 'dog' : 'cat';
            break;
        case 1:
            petType = (answerType === 'yes') ? 'dog' : 'cat';
            break;
        case 2:
            petType = (answerType === 'affectionate') ? 'dog' : 'cat';
            if (petType === 'cat') {
                showResult();
                return;
            }
            break;
        case 3:
            size = (answerType === 'apartment') ? 'small' : (answerType === 'house') ? 'large' : 'medium';
            break;
        case 4:
            furType = (answerType === 'yes') ? 'any' : 'short';
            showResult(furType);
            return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult(furType = '') {
    const resultDiv = document.getElementById('result');
    const resultImage = document.getElementById('resultImage');
    const resultText = document.getElementById('resultText');

    if (petType === 'dog') {
        if (size === 'small') {
            resultImage.src = 'https://i.pinimg.com/736x/d4/13/b8/d413b8d1e95b6fdc54e9d6798b5384dc.jpg';
            resultText.textContent = 'Маленькая собака';
        } else if (size === 'medium') {
            resultImage.src = 'https://avatars.mds.yandex.net/i?id=f882974007295cd72f116ab3b232e691_l-6274953-images-thumbs&n=13';
            resultText.textContent = 'Средняя собака';
        } else if (size === 'large') {
            resultImage.src = 'https://i.pinimg.com/736x/c6/14/f2/c614f2a75b764f5fdb3bdf2989244e18.jpg';
            resultText.textContent = 'Большая собака';
        }
        if (furType === 'short') {
            resultText.textContent += ' (короткошерстная или лысая)';
        } else {
            resultText.textContent += ' (вам подходит собака с любым типом шерсти)';
        }
    } else if (petType === 'cat') {
        resultImage.src = 'https://avatars.mds.yandex.net/i?id=1b925854854c4b0fdf922bef59ff0466_l-11003380-images-thumbs&n=13';
        resultText.textContent = 'Кошка';
    }

    resultDiv.style.display = 'block';
    document.getElementById('questionContainer').style.display = 'none';
}

document.getElementById('startTestButton').onclick = function() {
    currentQuestionIndex = 0;
    petType = '';
    size = '';
    furType = '';
    furType = '';
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion();
};
document.getElementById('startTestButton').onclick = function() {
    currentQuestionIndex = 0;
    petType = '';
    size = '';
    furType = '';
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion();
};

function loadMainPageData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('problem-description').innerText = data.shelters.main.problems.description;

            const causesList = document.getElementById('causes-list');
            data.shelters.main.problems.causes.forEach(cause => {
                const li = document.createElement('li');
                li.innerText = cause;
                causesList.appendChild(li);
            });

            const statisticsList = document.getElementById('statistics-list');
            data.shelters.main.problems.statistics.forEach(stat => {
                const li = document.createElement('li');
                li.innerText = stat;
                statisticsList.appendChild(li);
            });

            const importanceList = document.getElementById('importance-list');
            data.shelters.main.problems.importance.reasons.forEach(reason => {
                const li = document.createElement('li');
                li.innerText = reason;
                importanceList.appendChild(li);
            });
        });
}

function loadSheltersData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const sheltersList = document.getElementById('shelters-list');
            data.shelters.shelters_list.shelters.forEach(shelter => {
                const shelterDiv = document.createElement('div');
                shelterDiv.classList.add('shelter');

                const shelterContent = `
                    <div class="shelter-content">
                        <div class="image-container">
                            <img src="${shelter.image}" alt="${shelter.name}" width="300" class="shelter-image">
                            <h3 class="shelter-title">${shelter.name}</h3>
                        </div>
                        <div class="shelter-info">
                            <p>${shelter.description}</p>
                            <p><a href="${shelter.link}">Узнать больше</a></p>
                        </div>
                    </div>
                `;
                shelterDiv.innerHTML = shelterContent;
                sheltersList.appendChild(shelterDiv);
            });
        });
}

function loadHelpData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const volunteerDescription = document.getElementById('volunteer-description');
            volunteerDescription.innerText = "Приюты всегда нуждаются в помощи волонтеров. Вы можете помочь, участвуя в следующих мероприятиях:";

            const volunteerActivities = document.getElementById('volunteer-activities');
            data.shelters.help.volunteer_events.activities.forEach(activity => {
                const li = document.createElement('li');
                li.innerText = activity;
                volunteerActivities.appendChild(li);
            });

            const fundsList = document.getElementById('funds-list');
            data.shelters.help.funds.list.forEach(fund => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${fund.link}">${fund.name}</a>`;
                fundsList.appendChild(li);
            });
        });
}
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('problems')) {
        loadMainPageData();
    } else if (document.getElementById('shelters-list')) {
        loadSheltersData();
    } else if (document.getElementById('help-section')) {
        loadHelpData();
    }
});
