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
