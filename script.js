let score = 0;
let upgradeCost = 10;
let upgradeMultiplier = 1;

document.getElementById('clickButton').addEventListener('click', () => {
    score += upgradeMultiplier;
    document.getElementById('score').innerText = `Score: ${score}`;
});

document.getElementById('upgradeButton').addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeMultiplier++;
        upgradeCost *= 2;
        document.getElementById('score').innerText = `Score: ${score}`;
        document.getElementById('upgradeButton').innerText = `Upgrade (Cost: ${upgradeCost})`;
    }
});
