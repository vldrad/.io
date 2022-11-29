"use strict";

function weightIndex (weight, height) {
    for (let i = 1; i >= 1; i++) {
        const greeting = alert('Вітаю! Тут ви можете дізнатись індекс маси вашого тіла. Для цього виміряйте свої дані (вагу та зріст) та введіть їх згідно інструкцій.')
        const userWeight = prompt('Ваша вага? (в кг)','');
        const userHeight = prompt('Ваш зріст? (в см)','');
        weight = userWeight;
        height = userHeight;
        let index = weight / ((height / 100) * 2);
        index = (String(index));
        if (userWeight == null || userWeight == '' || typeof(userWeight) == 'string' || userHeight == null || userHeight == null || typeof(userHeight) == 'string') {
            const indexError = alert('Щось пішло не так , будь-ласка перевірте введені дані та спробуйте ще раз.');
            i--;
        } else {
            if (index < 16) {
                const a = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас значний дефіцит маси тіла.`);
            } else if (index == 16 || index < 18.5) {
                const b = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас дефіцит маси тіла.`);
            } else if (index == 18.5 || index < 25) {
                const d = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nМаса тіла в нормі.`);
            } else if (index == 25 || index < 30) {
                const c = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас є зайва вага.`);
            } else if (index == 30 || index < 35) {
                const d = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас ожиріння першого ступеню.`);
            } else if (index == 35 || index < 40) {
                const e = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас ожиріння другого ступеню.`);
            } else if (index == 40 || index > 40) {
                const f = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас ожиріння третього ступеню.`);
            }
        }
    }
    return;
} 
weightIndex();
