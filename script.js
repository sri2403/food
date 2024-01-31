function loadRandomFoodImage() {
    const foodImage = document.getElementById('foodImage');
    const categoryDropdown = document.getElementById('categoryDropdown');
    const selectedCategory = categoryDropdown.value;
    
    fetch(`https://foodish-api.com/api/images/${selectedCategory}/`)
        .then(response => response.json())
        .then(data => {
            foodImage.src = data.image;
        })
        .catch(error => console.error(`Error fetching ${selectedCategory} image:`, error));
}

function loadSelectedCategory() {
    const foodImage = document.getElementById('foodImage');
    const categoryDropdown = document.getElementById('categoryDropdown');
    const selectedCategory = categoryDropdown.value;

    if (selectedCategory) {
        fetch(`https://foodish-api.com/api/images/${selectedCategory}/`)
            .then(response => response.json())
            .then(data => {
                foodImage.src = data.image;
            })
            .catch(error => console.error(`Error fetching ${selectedCategory} image:`, error));
    }
}