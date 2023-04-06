// script for Search Menu
var dropdownButtons = document.querySelectorAll(".dropdown .btn");
dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        dropdownButtons.forEach(function (otherButton) {
            if (otherButton !== button) {
                otherButton.nextElementSibling.classList.remove("activeSearch");
            }
        });
        button.nextElementSibling.classList.toggle("activeSearch");
    });
});


// For Slick Slider




