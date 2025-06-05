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