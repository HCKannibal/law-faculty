let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const buttons = document.querySelectorAll(".add-btn");


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const perfumeName = button.dataset.name;

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "Добавлено ✓";

        setTimeout(function() {
            button.textContent = "Добавить в сумку";
        }, 1500);

        console.log(
            "В сумку добавлен аромат:",
            perfumeName
        );

    });

});