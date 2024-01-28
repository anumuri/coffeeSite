$(document).ready(function(){
$('.gallery-slider').slick({
    slidesToShow: 1, // Показывать только одну картинку на слайд
    slidesToScroll: 1, // Пролистывать по одной картинке
    autoplay: true, // Включить автоматическое листание
    autoplaySpeed: 2000, // Установить интервал автолистания в миллисекундах (например, 2000 = 2 секунды)
    prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Кнопка "Предыдущий слайд"
    nextArrow: '<button type="button" class="slick-next">Next</button>', // Кнопка "Следующий слайд"
});
});
