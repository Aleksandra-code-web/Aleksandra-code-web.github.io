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