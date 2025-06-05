fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const celebrities = data.shelters.celebrities.list;
        const container = document.getElementById('celebrities-container');
        celebrities.forEach(celebrity => {
            const celebrityDiv = document.createElement('div');
            celebrityDiv.classList.add('celebrity');
            celebrityDiv.innerHTML = `
                <div class="celebrity-content">
                    <img src="${celebrity.image}" alt="${celebrity.name}" class="celebrity-image">
                    <div class="celebrity-info">
                        <h3>${celebrity.name}</h3>
                        <p>${celebrity.description}</p>
                    </div>
                </div>
            `;
            container.appendChild(celebrityDiv);
        });
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));
