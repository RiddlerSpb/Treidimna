let currentHoroscopeType = 'daily';

function fetchHoroscope() {
    const zodiacSign = document.getElementById('zodiacSelect').value;
    const horoscopes = {
        daily: {
            aries: 'Сегодня отличный день для новых начинаний в криптоинвестициях!',
            taurus: 'Будьте осторожны с крупными вложениями, возможны непредвиденные колебания.',
            gemini: 'Ваш аналитический ум поможет вам сделать правильные инвестиционные решения.',
            cancer: 'Не стоит полагаться на интуицию, используйте проверенные стратегии.',
            leo: 'Ваша уверенность поможет вам преодолеть любые трудности на крипторынке.',
            virgo: 'Внимание к деталям приведет к успешным сделкам.',
            libra: 'Ищите баланс между рисками и возможностями.',
            scorpio: 'Ваши инвестиции могут принести неожиданные доходы.',
            sagittarius: 'Смелые шаги приведут к большим победам.',
            capricorn: 'Терпение и упорство - ключи к успеху в криптовалюте.',
            aquarius: 'Ищите инновационные способы инвестирования.',
            pisces: 'Слушайте свою интуицию, но не забывайте про аналитику.'
        },
        weekly: {
            aries: 'Эта неделя принесет новые возможности для расширения вашего криптопортфеля.',
            taurus: 'Держите под контролем свои эмоции и избегайте импульсивных решений.',
            gemini: 'Общение с коллегами и партнерами поможет вам найти новые идеи.',
            cancer: 'Проверьте свои стратегии и убедитесь, что они соответствуют текущему рынку.',
            leo: 'Неделя будет полна энергии, используйте ее для максимальной продуктивности.',
            virgo: 'Организованность и планирование помогут вам достичь успеха.',
            libra: 'Сосредоточьтесь на долгосрочных целях и избегайте краткосрочных рисков.',
            scorpio: 'Ваши инвестиции могут принести значительные результаты.',
            sagittarius: 'Будьте открыты для новых возможностей и идей.',
            capricorn: 'Стремитесь к стабильности и избегайте ненужных рисков.',
            aquarius: 'Используйте свой творческий подход для нахождения новых решений.',
            pisces: 'Ваша интуиция поможет вам сделать правильные инвестиционные решения.'
        }
    };

    const horoscopeText = horoscopes[currentHoroscopeType][zodiacSign];
    const horoscopeContainer = document.getElementById('horoscopeContainer');
    horoscopeContainer.textContent = horoscopeText;
}

function toggleHoroscope(type) {
    currentHoroscopeType = type;
    fetchHoroscope();
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
