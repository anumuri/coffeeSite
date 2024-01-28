document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");

    // Функция для загрузки новостей из JSON
    function loadNews() {
        fetch("news.json")
            .then(response => response.json())
            .then(data => {
                // Перебираем новости и создаем HTML для каждой новости
                data.forEach(news => {
                    const newsItem = document.createElement("div");
                    newsItem.classList.add("news-item");
                    newsItem.innerHTML = `
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-content">${news.content}</p>
                    `;
                    newsContainer.appendChild(newsItem);
                });
            })
            .catch(error => console.error("Ошибка загрузки новостей:", error));
    }

    // Загрузка новостей при загрузке страницы
    loadNews();
});
