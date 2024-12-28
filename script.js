function hover(element) {
    document.getElementById(element).src = "images/" + element + "-white.png";
}

function gone(element) {
    document.getElementById(element).src = "images/" + element + "-colored.png";
}

// Function to display the overlay
function displayOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

// Function to close the overlay
function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Close overlay by clicking anywhere outside of the content area
document.getElementById('overlay').addEventListener('click', closeOverlay);

// Prevent click events on the content from closing the overlay
document.getElementById('overlay-content').addEventListener('click', function(event) {
    event.stopPropagation();
});


document.addEventListener('DOMContentLoaded', () => {

    // preload white images to reduce hover buffer
    ['linkedin', 'mail', 'resume', 'github','me','blog'].forEach((icon) => {
        const img = new Image();
        img.src = `images/${icon}-white.png`;
    })

})