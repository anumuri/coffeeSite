document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu");
    var menuItems = document.getElementById("menuItems");
    var menuTimer;

    // Показываем выпадающее меню при наведении на "Меню"
    menu.addEventListener("mouseenter", function() {
        clearTimeout(menuTimer);
        menuItems.style.display = "block";
    });

    // Скрываем выпадающее меню при уходе с "Меню" и "Меню" курсора мыши
    menu.addEventListener("mouseleave", function() {
        menuTimer = setTimeout(function() {
            menuItems.style.display = "none";
        }, 500); // Задержка перед скрытием меню (в миллисекундах)
    });

    menuItems.addEventListener("mouseenter", function() {
        clearTimeout(menuTimer);
    });

    // Скрываем выпадающее меню при уходе с него и его подменю
    menuItems.addEventListener("mouseleave", function() {
        menuTimer = setTimeout(function() {
            menuItems.style.display = "none";
        }, 500); // Задержка перед скрытием меню (в миллисекундах)
    });

    // Отменяем скрытие меню при клике внутри выпадающего списка
    menuItems.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // Скрываем выпадающее меню при клике вне области меню
    document.addEventListener("click", function(event) {
        menuItems.style.display = "none";
    });
});
