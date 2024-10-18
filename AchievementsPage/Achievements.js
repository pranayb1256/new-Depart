document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const achievementCards = document.querySelectorAll('.achievement-card');

    // Event listener for each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the category to filter by
            const category = button.getAttribute('data-category');

            // Loop through all achievement cards
            achievementCards.forEach(card => {
                // Check if card's category matches the selected category
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block'; // Show card
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });
});
