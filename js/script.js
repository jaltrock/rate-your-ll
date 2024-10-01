// Function to load ratings from localStorage
function loadRatings() {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    ratings.forEach(displayRating);
}

// Function to display a rating
function displayRating(rating) {
    const ratingItem = document.createElement('div');
    ratingItem.classList.add('rating-item');
    ratingItem.innerHTML = `<strong>${rating.name}</strong> - ${rating.stars} Stars<br>${rating.comment}`;
    
    document.getElementById('ratingsDisplay').appendChild(ratingItem);
}

// Event listener for form submission
document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const landlordName = document.getElementById('landlordName').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (landlordName && rating && comment) {
        // Create a rating object
        const ratingObject = {
            name: landlordName,
            stars: rating,
            comment: comment
        };

        // Store the rating in localStorage
        const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
        ratings.push(ratingObject);
        localStorage.setItem('ratings', JSON.stringify(ratings));

        // Display the new rating
        displayRating(ratingObject);
        
        // Clear the form fields
        document.getElementById('ratingForm').reset();
    }
});

// Load existing ratings on page load
window.onload = loadRatings;

