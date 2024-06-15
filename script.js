const apiKey = '5566cf4b04924b2d8e1d891c1e134427';  // Вставьте ваш API ключ здесь
const apiUrl = 'https://newsapi.org/v2/everything';

async function fetchNews() {
    const category = document.getElementById('categorySelect').value;
    const query = category ? `q=${category}&` : '';
    const url = `${apiUrl}?${query}apiKey=${apiKey}&language=ru&pageSize=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';  // Очистка предыдущих новостей

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;
        newsItem.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = article.description;
        newsItem.appendChild(descriptionElement);

        const linkElement = document.createElement('a');
        linkElement.href = article.url;
        linkElement.textContent = 'Читать далее';
        linkElement.target = '_blank';
        newsItem.appendChild(linkElement);

        newsContainer.appendChild(newsItem);
    });
}

// Автоматическое обновление новостей каждые 5 минут (300000 миллисекунд)
setInterval(fetchNews, 300000);

// Инициализация при загрузке страницы
window.onload = fetchNews;
