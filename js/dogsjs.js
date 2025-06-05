    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dogs = data.shelters.famous_dogs.list;
            const container = document.getElementById('dogs-container');
            dogs.forEach(dog => {
                const dogDiv = document.createElement('div');
                dogDiv.classList.add('dog');
                dogDiv.innerHTML = `
                    <div class="dog-content">
                        <img src="${dog.image}" alt="${dog.name}" class="dog-image">
                        <div class="dog-info">
                            <h3>${dog.name}</h3>
                            <p>${dog.description}</p>
                        </div>
                    </div>
                `;
                container.appendChild(dogDiv);
            });
        })