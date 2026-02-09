// Get all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

// Add a click event listener to each timeline item
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'active' class to expand/collapse details
        item.classList.toggle('active');
    });
});
