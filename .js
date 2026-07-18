document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButton.forEach(button => {
        button.addEventListener('click', function() {
            //1. Remove 'active' class from all buttons and add to the clicked one
            filterButton.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            //2. Get the category filter value from the clicked button
            const filterValue = this.getAttribute('data-filter');

            //3. Show/hide gallery items based on the filter value
            galleryItems.forEach(item => {
                //if 'all' is selected or the item has the class that matches the filter value, show it; otherwise, hide it
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});