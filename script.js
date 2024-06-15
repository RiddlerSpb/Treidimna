let btc = 0;
let eth = 0;
let upgradeCost = 10;
let upgradeMultiplier = 1;
const exchangeRate = 10;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('clickButton').addEventListener('click', () => {
        btc += upgradeMultiplier;
        document.getElementById('score').innerText = `BTC: ${btc}`;
    });

    document.getElementById('upgradeButton').addEventListener('click', () => {
        if (btc >= upgradeCost) {
            btc -= upgradeCost;
            upgradeMultiplier++;
            upgradeCost *= 2;
            document.getElementById('score').innerText = `BTC: ${btc}`;
            document.getElementById('upgradeButton').innerText = `Upgrade Mining Rig (Cost: ${upgradeCost} BTC)`;
        }
    });

    document.getElementById('exchangeButton').addEventListener('click', () => {
        if (btc >= exchangeRate) {
            btc -= exchangeRate;
            eth++;
            document.getElementById('score').innerText = `BTC: ${btc}`;
            document.getElementById('ethScore').innerText = `ETH: ${eth}`;
        }
    });
});
