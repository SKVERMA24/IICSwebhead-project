function toggleDropdown(button) {
    let dropdown = button.nextElementSibling; // Get the dropdown-content
    let parent = button.parentElement; // Get the dropdown container

    parent.classList.toggle("active");

    // Close other dropdowns when one is clicked
    document.querySelectorAll(".dropdown").forEach(drop => {
        if (drop !== parent) drop.classList.remove("active");
    });
}
