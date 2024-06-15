let cash = 10000;
let btc = 0;
let eth = 0;
const btcPrice = 50000;
const ethPrice = 3000;

function updateStats() {
    document.getElementById('cash').innerText = cash;
    document.getElementById('btc').innerText = btc;
    document.getElementById('eth').innerText = eth;
}

function trade(action, currency) {
    let price = 0;
    if (currency === 'BTC') {
        price = btcPrice;
    } else if (currency === 'ETH') {
        price = ethPrice;
    }

    if (action === 'buy') {
        if (cash >= price) {
            cash -= price;
            if (currency === 'BTC') {
                btc++;
            } else if (currency === 'ETH') {
                eth++;
            }
        } else {
            alert('Not enough cash!');
        }
    } else if (action === 'sell') {
        if (currency === 'BTC' && btc > 0) {
            cash += price;
            btc--;
        } else if (currency === 'ETH' && eth > 0) {
            cash += price;
            eth--;
        } else {
            alert('Not enough cryptocurrency!');
        }
    }

    updateStats();
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateStats();
});
