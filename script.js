// Имитация изменения цен активов
function updatePrices() {
    const assetPrices = {
        A: 100 + Math.floor(Math.random() * 50),
        B: 200 + Math.floor(Math.random() * 100),
        C: 50 + Math.floor(Math.random() * 20)
    };

    // Обновление цен на странице
    document.getElementById('assetList').innerHTML = `
        <li>Акция A - Цена: $${assetPrices['A']} <button onclick="buyAsset('A', ${assetPrices['A']})">Купить</button></li>
        <li>Акция B - Цена: $${assetPrices['B']} <button onclick="buyAsset('B', ${assetPrices['B']})">Купить</button></li>
        <li>Криптовалюта C - Цена: $${assetPrices['C']} <button onclick="buyAsset('C', ${assetPrices['C']})">Купить</button></li>
    `;
}

// Функция покупки активов
function buyAsset(asset, price) {
    let balance = parseFloat(document.getElementById('balance').textContent.split('$')[1]);
    if (balance >= price) {
        balance -= price;
        document.getElementById('balance').textContent = `Баланс: $${balance.toFixed(2)}`;
        // Добавить актив в портфель пользователя (здесь может быть логика добавления в локальное хранилище)
        alert(`Вы купили актив ${asset} за $${price}`);
    } else {
        alert('Недостаточно средств для покупки.');
    }
}

// Инициализация
window.onload = function() {
    // Имитация обновления цен активов каждые 5 секунд
    setInterval(updatePrices, 5000);
};
