// Получаем уровень из URL
const urlParams = new URLSearchParams(window.location.search);
const level = parseInt(urlParams.get('level')) || 1;

// Расширенная конфигурация уровней с разными языками
const levels = {
    1: {
        name: 'Мелкий вор',
        portrait: '🧑',
        hp: 80,
        damage: 10,
        time: 20,
        language: 'ru',
        sentences: [
            'Подозреваемый отрицает свою причастность к краже.',
            'Свидетели утверждают что видели его на месте преступления.',
            'Необходимо провести дополнительное расследование.',
            'Протокол допроса составлен в соответствии с законом.',
            'Обвиняемый имеет право на защитника по своему выбору.',
            'Материалы дела переданы в следственный отдел.',
            'Требуется установить местонахождение похищенного имущества.',
            'Подозреваемый задержан на основании постановления суда.',
            'Свидетельские показания противоречат версии обвиняемого.',
            'Экспертиза подтвердила наличие отпечатков пальцев на месте.',
        ]
    },
    2: {
        name: 'Контрабандист',
        portrait: '👨‍💼',
        hp: 120,
        damage: 15,
        time: 20,
        language: 'ru',
        sentences: [
            'Обвиняемый занимался незаконной перевозкой товаров через границу.',
            'При обыске обнаружены запрещённые предметы и документы.',
            'Подозреваемый отказывается сотрудничать со следствием.',
            'Требуется установить всех соучастников преступления.',
            'Материалы дела направлены в прокуратуру для утверждения.',
            'Таможенная служба зафиксировала множественные нарушения.',
            'Обнаружена схема незаконного ввоза контрабандных товаров.',
            'Подозреваемый использовал поддельные документы для провоза.',
            'Установлены связи с международной преступной группировкой.',
            'Изъятые товары направлены на экспертизу и оценку.',
            'Следствие располагает доказательствами систематической деятельности.',
            'Обвиняемый пытался скрыться от правоохранительных органов.',
        ]
    },
    3: {
        name: 'Шпион-диверсант',
        portrait: '🕵️',
        hp: 150,
        damage: 20,
        time: 20,
        language: 'ru',
        sentences: [
            'Задержанный подозревается в шпионаже в пользу иностранного государства.',
            'Обнаружены секретные документы и шифровальное оборудование.',
            'Подозреваемый проходил специальную подготовку за рубежом.',
            'Установлены связи с агентурной сетью противника.',
            'Дело представляет особую важность для государственной безопасности.',
            'Необходимо выявить всю цепочку передачи информации.',
            'Агент использовал легендированное прикрытие для проникновения.',
            'Обнаружены тайники с секретными материалами и оборудованием.',
            'Подозреваемый имел доступ к засекреченным объектам.',
            'Установлены каналы связи с иностранной разведкой.',
            'Проведена оперативная разработка по линии контрразведки.',
            'Агент вербовал граждан для сбора секретной информации.',
            'Изъяты фотоматериалы стратегических объектов.',
        ]
    },
    4: {
        name: 'Главарь банды',
        portrait: '👤',
        hp: 200,
        damage: 25,
        time: 20,
        language: 'ru',
        sentences: [
            'Обвиняемый является организатором преступной группировки.',
            'Под его руководством совершено множество тяжких преступлений.',
            'Установлены связи с коррумпированными чиновниками.',
            'Группировка занималась рэкетом и незаконной торговлей.',
            'Подозреваемый оказывает психологическое давление на свидетелей.',
            'Требуется полная ликвидация преступной организации.',
            'Материалы дела засекречены и требуют особого контроля.',
            'Преступная группа контролировала целые районы города.',
            'Обвиняемый создал разветвлённую сеть подпольных предприятий.',
            'Установлено отмывание денег через подставные компании.',
            'Группировка имела связи с международными криминальными структурами.',
            'Подозреваемый организовал систему коррупции в правоохранительных органах.',
            'Изъято оружие и боеприпасы в особо крупных размерах.',
            'Обвиняемый причастен к заказным убийствам и похищениям.',
            'Требуется конфискация всего имущества преступной организации.',
        ]
    },
    5: {
        name: 'Двойной агент',
        portrait: '🎭',
        hp: 250,
        damage: 30,
        time: 20,
        language: 'mixed',
        sentences: [
            'Агент работал одновременно на две разведывательные службы.',
            'The suspect has been operating under deep cover for years.',
            'Обнаружены доказательства передачи секретной информации.',
            'Intelligence reports confirm his involvement in espionage.',
            'Подозреваемый использовал сложные методы конспирации.',
            'The agent maintained contact with foreign handlers regularly.',
            'Установлены факты получения денежного вознаграждения.',
            'Classified documents were found in his possession.',
            'Агент имел доступ к критически важной информации.',
            'The operation has compromised national security interests.',
            'Требуется немедленная нейтрализация агентурной сети.',
            'Multiple dead drops were discovered across the city.',
            'Подозреваемый прошёл подготовку в специальных центрах.',
            'The investigation revealed a complex network of operatives.',
            'Необходимо установить полный масштаб нанесённого ущерба.',
        ]
    },
    6: {
        name: 'Международный террорист',
        portrait: '🌐',
        hp: 300,
        damage: 35,
        time: 20,
        language: 'mixed',
        sentences: [
            'Подозреваемый причастен к организации террористических актов.',
            'The terrorist cell has been planning attacks for months.',
            'Обнаружены взрывчатые вещества и детонаторы.',
            'Intelligence agencies worldwide are tracking this network.',
            'Установлены связи с международными террористическими организациями.',
            'The suspect received training in overseas militant camps.',
            'Требуется предотвратить готовящиеся теракты.',
            'Financial transactions reveal funding from foreign sources.',
            'Подозреваемый вербовал новых членов террористической ячейки.',
            'Encrypted communications were intercepted by security services.',
            'Необходимо ликвидировать всю террористическую сеть.',
            'The investigation uncovered plans for multiple coordinated attacks.',
            'Обвиняемый использовал поддельные документы для перемещения.',
            'Surveillance footage confirms meetings with known extremists.',
            'Требуется международное сотрудничество спецслужб.',
        ]
    },
    7: {
        name: 'Глава разведки',
        portrait: '👁️',
        hp: 350,
        damage: 40,
        time: 20,
        language: 'mixed',
        sentences: [
            'Подозреваемый руководил иностранной разведывательной операцией.',
            'The intelligence chief orchestrated numerous covert operations.',
            'Обнаружена обширная агентурная сеть на территории страны.',
            'Classified information was systematically extracted and transmitted.',
            'Установлены каналы связи с высокопоставленными источниками.',
            'The operation compromised critical government infrastructure.',
            'Подозреваемый координировал деятельность множества агентов.',
            'Advanced surveillance equipment was deployed across strategic locations.',
            'Требуется полная зачистка разведывательной сети противника.',
            'The investigation revealed decades of intelligence gathering.',
            'Обвиняемый имел доступ к государственным секретам высшего уровня.',
            'Multiple government officials were compromised by the network.',
            'Необходимо установить полный масштаб разведывательной операции.',
            'The intelligence operation targeted military and political leadership.',
            'Подозреваемый использовал дипломатическое прикрытие для шпионажа.',
            'Counterintelligence efforts have been ongoing for several years.',
            'Требуется немедленная ликвидация всей разведывательной структуры.',
        ]
    },
    8: {
        name: 'Предатель Родины',
        portrait: '⚡',
        hp: 400,
        damage: 50,
        time: 20,
        language: 'mixed',
        sentences: [
            'Обвиняемый совершил государственную измену высшей степени.',
            'The traitor sold classified military secrets to hostile nations.',
            'Установлены факты систематического предательства интересов страны.',
            'Top secret defense plans were compromised by this individual.',
            'Подозреваемый занимал высокую должность в государственных структурах.',
            'The betrayal resulted in catastrophic security breaches.',
            'Обнаружены доказательства многолетней предательской деятельности.',
            'Strategic military operations were exposed to enemy intelligence.',
            'Требуется применение высшей меры наказания за измену Родине.',
            'The investigation uncovered a conspiracy at the highest levels.',
            'Подозреваемый получал огромные суммы за передачу секретов.',
            'National defense capabilities were severely compromised.',
            'Установлены связи с руководством враждебных государств.',
            'The traitor provided access to classified weapons systems.',
            'Необходимо восстановить нарушенную государственную безопасность.',
            'Counterintelligence operations were sabotaged from within.',
            'Обвиняемый нанёс непоправимый ущерб национальной безопасности.',
            'The extent of the betrayal threatens the very foundation of the state.',
        ]
    }
};

// Игровые переменные
let currentLevel = levels[level];
let playerHp = 100;
let enemyHp = currentLevel.hp;
let currentSentence = '';
let timeLeft = currentLevel.time;
let timerInterval = null;
let totalChars = 0;
let errorCount = 0;
let isGameOver = false;
let usedSentences = [];

// Элементы DOM
const playerHealthBar = document.getElementById('playerHealth');
const playerHpText = document.getElementById('playerHp');
const enemyHealthBar = document.getElementById('enemyHealth');
const enemyHpText = document.getElementById('enemyHp');
const enemyMaxHpText = document.getElementById('enemyMaxHp');
const enemyNameEl = document.getElementById('enemyName');
const enemyPortraitEl = document.getElementById('enemyPortrait');
const targetTextEl = document.getElementById('targetText');
const userInputEl = document.getElementById('userInput');
const timerEl = document.getElementById('timer');
const errorsEl = document.getElementById('errors');
const accuracyEl = document.getElementById('accuracy');
const gameOverModal = document.getElementById('gameOverModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const sentenceHistory = document.getElementById('sentenceHistory');

// Музыкальный контроль
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const menuBtn = document.getElementById('menuBtn');
let isMusicPlaying = false;

// Автоматический запуск музыки
window.addEventListener('load', () => {
    bgMusic.play().then(() => {
        isMusicPlaying = true;
        musicToggle.textContent = '🔊';
    }).catch(() => {
        // Если автовоспроизведение заблокировано браузером
        console.log('Автовоспроизведение заблокировано. Нажмите кнопку для включения музыки.');
    });
});

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.textContent = '🔊';
        isMusicPlaying = true;
    }
});

// Кнопка выхода в меню
menuBtn.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите выйти в меню? Прогресс будет потерян.')) {
        window.location.href = 'index.html';
    }
});

// Инициализация игры
function initGame() {
    enemyNameEl.textContent = currentLevel.name;
    enemyPortraitEl.textContent = currentLevel.portrait;
    enemyHpText.textContent = enemyHp;
    enemyMaxHpText.textContent = currentLevel.hp;
    updateHealthBars();
    loadNewSentence();
    startTimer();
    userInputEl.focus();
}

// Загрузка нового предложения
function loadNewSentence() {
    const sentences = currentLevel.sentences;
    
    let availableSentences = sentences.filter(s => !usedSentences.includes(s));
    
    if (availableSentences.length === 0) {
        usedSentences = [];
        availableSentences = sentences;
    }
    
    currentSentence = availableSentences[Math.floor(Math.random() * availableSentences.length)];
    usedSentences.push(currentSentence);
    
    displaySentenceWithChars(currentSentence);
    
    userInputEl.value = '';
    timeLeft = currentLevel.time;
    timerEl.textContent = timeLeft;
}

// Отображение предложения с отдельными символами
function displaySentenceWithChars(sentence) {
    targetTextEl.innerHTML = '';
    for (let char of sentence) {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        targetTextEl.appendChild(span);
    }
}

// Таймер
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if (timeLeft <= 3) {
            timerEl.style.color = '#e74c3c';
            timerEl.classList.add('flash');
        } else {
            timerEl.style.color = '#e74c3c';
            timerEl.classList.remove('flash');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

// Обработка истечения времени
function handleTimeout() {
    if (isGameOver) return;
    
    addToHistory(currentSentence, false, 'Время истекло');
    
    takeDamage(currentLevel.damage);
    
    if (!isGameOver) {
        loadNewSentence();
        startTimer();
    }
}

// Добавление в историю предложений
function addToHistory(sentence, isCorrect, reason = '') {
    const historyItem = document.createElement('div');
    historyItem.className = `history-item ${isCorrect ? 'correct' : 'failed'}`;
    historyItem.textContent = `${isCorrect ? '✓' : '✗'} ${sentence} ${reason ? `(${reason})` : ''}`;
    
    sentenceHistory.insertBefore(historyItem, sentenceHistory.firstChild);
    
    while (sentenceHistory.children.length > 5) {
        sentenceHistory.removeChild(sentenceHistory.lastChild);
    }
}

// Обработка ввода с подсветкой букв
userInputEl.addEventListener('input', (e) => {
    if (isGameOver) return;
    
    const typed = e.target.value;
    const target = currentSentence;
    const chars = targetTextEl.querySelectorAll('.char');
    
    // Подсвечиваем каждую букву
    for (let i = 0; i < chars.length; i++) {
        if (i < typed.length) {
            if (typed[i] === target[i]) {
                chars[i].classList.remove('incorrect');
                chars[i].classList.add('correct');
            } else {
                chars[i].classList.remove('correct');
                chars[i].classList.add('incorrect');
            }
        } else {
            chars[i].classList.remove('correct', 'incorrect');
        }
    }
    
    // Проверка на ошибку
    if (typed.length > 0 && !target.startsWith(typed)) {
        errorCount++;
        errorsEl.textContent = errorCount;
        updateAccuracy();
        takeDamage(currentLevel.damage);
        
        addToHistory(currentSentence, false, 'Ошибка ввода');
        
        userInputEl.style.borderColor = '#e74c3c';
        setTimeout(() => {
            userInputEl.style.borderColor = '#34495e';
        }, 300);
        
        if (!isGameOver) {
            loadNewSentence();
            startTimer();
        }
        
        return;
    }
    
    // Проверка на завершение предложения
    if (typed === target) {
        totalChars += typed.length;
        updateAccuracy();
        dealDamage(25);
        
        addToHistory(currentSentence, true);
        
        if (!isGameOver) {
            loadNewSentence();
            startTimer();
        }
    }
});

// Нанесение урона боссу
function dealDamage(damage) {
    enemyHp = Math.max(0, enemyHp - damage);
    enemyHpText.textContent = enemyHp;
    updateHealthBars();
    
    document.querySelector('.enemy-card').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.enemy-card').classList.remove('shake');
    }, 300);
    
    if (enemyHp <= 0) {
        endGame(true);
    }
}

// Получение урона игроком
function takeDamage(damage) {
    playerHp = Math.max(0, playerHp - damage);
    playerHpText.textContent = playerHp;
    updateHealthBars();
    
    document.querySelector('.player-card').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.player-card').classList.remove('shake');
    }, 300);
    
    if (playerHp <= 0) {
        endGame(false);
    }
}

// Обновление полос здоровья
function updateHealthBars() {
    const playerPercent = (playerHp / 100) * 100;
    const enemyPercent = (enemyHp / currentLevel.hp) * 100;
    
    playerHealthBar.style.width = playerPercent + '%';
    enemyHealthBar.style.width = enemyPercent + '%';
}

// Обновление точности
function updateAccuracy() {
    if (totalChars === 0 && errorCount === 0) {
        accuracyEl.textContent = '100%';
        return;
    }
    
    const accuracy = totalChars === 0 ? 0 : Math.round((totalChars / (totalChars + errorCount)) * 100);
    accuracyEl.textContent = accuracy + '%';
}

// Завершение игры
function endGame(victory) {
    isGameOver = true;
    clearInterval(timerInterval);
    userInputEl.disabled = true;
    
    if (victory) {
        modalTitle.textContent = 'ПОБЕДА!';
        modalMessage.textContent = `Товарищ следователь, вы успешно провели допрос! ${currentLevel.name} сломлен. Точность: ${accuracyEl.textContent}`;
        modalTitle.style.color = '#27ae60';
    } else {
        modalTitle.textContent = 'ПОРАЖЕНИЕ';
        modalMessage.textContent = `Товарищ следователь, вы не справились с заданием. ${currentLevel.name} оказался сильнее. Требуется дополнительная подготовка.`;
        modalTitle.style.color = '#e74c3c';
    }
    
    gameOverModal.classList.remove('hidden');
}

initGame();