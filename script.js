let btc = 0;
let not = 0;
let upgradeCost = 10;
let upgradeMultiplier = 1;
const exchangeRate = 10;
const btcPerHour = 1; // Amount of BTC earned per hour

function updateDisplay() {
    document.getElementById('score').innerText = `BTC: ${btc}`;
    document.getElementById('notScore').innerText = `NOT: ${not}`;
    document.getElementById('upgradeButton').innerText = `Upgrade Mining Rig (Cost: ${upgradeCost} BTC)`;
}

function earnBTC() {
    btc += btcPerHour * upgradeMultiplier;
    updateDisplay();
}

// Earn BTC every hour (3600000 milliseconds)
setInterval(earnBTC, 3600000);

// For demonstration purposes, earn BTC every second
setInterval(earnBTC, 1000);

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('upgradeButton').addEventListener('click', () => {
        if (btc >= upgradeCost) {
            btc -= upgradeCost;
            upgradeMultiplier++;
            upgradeCost *= 2;
            updateDisplay();
        }
    });

    document.getElementById('exchangeButton').addEventListener('click', () => {
        if (btc >= exchangeRate) {
            btc -= exchangeRate;
            not++;
            updateDisplay();
        }
    });
});
