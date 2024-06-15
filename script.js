const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

// Функция для получения данных о криптовалютах
async function fetchCryptocurrencies() {
    try {
        const response = await fetch(`${apiUrl}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
        const data = await response.json();
        displayCryptocurrencies(data);
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

// Функция для отображения данных о криптовалютах на странице
function displayCryptocurrencies(cryptocurrencies) {
    const cryptocurrenciesElement = document.getElementById('cryptocurrencies');
    cryptocurrenciesElement.innerHTML = ''; // Очистка предыдущего содержимого

    cryptocurrencies.forEach(crypto => {
        const cryptocurrencyDiv = document.createElement('div');
        cryptocurrencyDiv.classList.add('cryptocurrency');

        const nameElement = document.createElement('h3');
        nameElement.textContent = `${crypto.name} (${crypto.symbol.toUpperCase()})`;
        cryptocurrencyDiv.appendChild(nameElement);

        const priceElement = document.createElement('div');
        priceElement.classList.add('price');
        priceElement.textContent = `Цена: $${crypto.current_price.toFixed(2)}`;
        cryptocurrencyDiv.appendChild(priceElement);

        const changeElement = document.createElement('div');
        changeElement.classList.add('change');
        const changeText = crypto.price_change_percentage_24h > 0 ? `+${crypto.price_change_percentage_24h.toFixed(2)}% (24 часа)` : `${crypto.price_change_percentage_24h.toFixed(2)}% (24 часа)`;
        changeElement.textContent = `Изменение: ${changeText}`;
        cryptocurrencyDiv.appendChild(changeElement);

        cryptocurrenciesElement.appendChild(cryptocurrencyDiv);
    });
}

// Функция для поиска криптовалюты по символу (например, BTC, ETH)
function searchCryptocurrency() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    // Если введенное значение пусто, загружаем все криптовалюты
    if (!searchInput) {
        fetchCryptocurrencies();
        return;
    }

    // Отправляем запрос к API для поиска криптовалюты по символу
    fetch(`${apiUrl}/autocomplete?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                alert('Криптовалюта не найдена.');
                return;
            }
            const symbol = data[0].symbol;
            fetch(`${apiUrl}/${symbol}?localization=false`)
                .then(response => response.json())
                .then(crypto => {
                    displayCryptocurrencies([crypto]);
                })
                .catch(error => {
                    console.error('Ошибка загрузки данных:', error);
                });
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });
}

// Инициализация при загрузке страницы
window.onload = function() {
    fetchCryptocurrencies();
};
