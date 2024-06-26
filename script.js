const weeklyHoroscopes = {
    aries: "На этой неделе, Овен, вы почувствуете прилив энергии, который поможет вам в делах, связанных с криптовалютами. Не бойтесь рисковать, но не забывайте о возможных колебаниях рынка.",
    taurus: "Тельцы, ваше терпение и стабильность будут вознаграждены. Важно следовать своей стратегии и не поддаваться панике из-за временных спадов.",
    gemini: "Близнецы, на этой неделе вы будете полны идей. Используйте свои аналитические способности, чтобы принять важные решения в инвестициях.",
    cancer: "Раки, ваша интуиция будет особенно сильна. Доверьтесь ей при выборе новых активов для инвестиций, но не забывайте про анализ.",
    leo: "Львы, ваша уверенность поможет вам принимать смелые решения. Используйте этот период для того, чтобы выйти на новые рынки.",
    virgo: "Девы, внимание к деталям поможет вам избежать ошибок. Анализируйте каждый шаг и не бойтесь задавать вопросы.",
    libra: "Весы, баланс и гармония – ключ к успеху на этой неделе. Следите за новостями и аналитикой, чтобы вовремя реагировать на изменения.",
    scorpio: "Скорпионы, ваши инвестиции могут принести неожиданные доходы. Не бойтесь экспериментировать и искать новые возможности.",
    sagittarius: "Стрельцы, на этой неделе смелые шаги приведут к большим победам. Доверяйте своей интуиции и не бойтесь идти против течения.",
    capricorn: "Козероги, терпение и упорство – ваши главные союзники. Продолжайте следовать своей стратегии и избегайте импульсивных решений.",
    aquarius: "Водолеи, ищите инновационные способы инвестирования. Ваши нестандартные идеи могут принести значительные прибыли.",
    pisces: "Рыбы, слушайте свою интуицию, но не забывайте про аналитику. На этой неделе возможны неожиданные изменения, будьте готовы к ним."
};

function fetchHoroscope() {
    const zodiacSign = document.getElementById('zodiacSelect').value;
    const horoscopeText = weeklyHoroscopes[zodiacSign];
    const horoscopeContainer = document.getElementById('horoscopeContainer');
    horoscopeContainer.textContent = horoscopeText;
}

function shareHoroscope() {
    const horoscopeText = document.getElementById('horoscopeContainer').textContent;
    const shareText = `Мой крипто-гороскоп: ${horoscopeText}`;
    if (navigator.share) {
        navigator.share({
            title: 'Мой крипто-гороскоп',
            text: shareText,
            url: window.location.href
        }).then(() => {
            console.log('Гороскоп успешно отправлен.');
        }).catch(err => {
            console.error('Ошибка при отправке гороскопа:', err);
        });
    } else {
        alert('Ваш браузер не поддерживает функцию "Поделиться".');
    }
}

// Инициализация при загрузке страницы
window.onload = fetchHoroscope;
