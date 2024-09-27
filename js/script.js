document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const landlordName = document.getElementById('landlordName').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    const ratingsList = document.getElementById('ratingsList');

    const listItem = document.createElement('li');
    listItem.textContent = `${landlordName}: ${rating} stars - "${comments}"`;
    ratingsList.appendChild(listItem);

    // Clear the form fields
    document.getElementById('ratingForm').reset();
});