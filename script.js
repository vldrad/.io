"use strict";

function weightIndex (weight, height) {
    const greeting = alert('Вітаю! Тут ви можете дізнатись індекс маси вашого тіла. Для цього виміряйте свої дані (вагу та зріст) та введіть їх згідно інструкцій.');
    for (let i = 1; i >= 1; i++) {
        let userWeight = prompt('Ваша вага? (в кг)','');
        let userHeight = prompt('Ваш зріст? (в см)','');
        weight = userWeight;
        height = userHeight;
        userWeight = Number(userWeight);
        userHeight = Number(userHeight);
        console.log(userWeight);
        if (userWeight == null || userHeight == null || userWeight == '' || userHeight == '' || isNaN(userWeight) == true || isNaN(userHeight) == true) {
            const indexError = alert('Щось пішло не так , будь-ласка перевірте введені дані та спробуйте ще раз.');
            i--;
        } else {
            let index = weight / ((height / 100) * 2);
            index = (String(index));
            if (index < 16) {
                const a = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас значний дефіцит маси тіла.`);
                break;
            } else if (index == 16 || index < 18.5) {
                const b = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас дефіцит маси тіла.`);
                break;
            } else if (index == 18.5 || index < 25) {
                const d = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nМаса тіла в нормі.`);
                break;
            } else if (index == 25 || index < 30) {
                const c = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас є зайва вага.`);
                break;
            } else if (index == 30 || index < 35) {
                const d = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас ожиріння першого ступеню.`);
                break;
            } else if (index == 35 || index < 40) {
                const e = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас ожиріння другого ступеню.`);
                break;
            } else if (index == 40 || index > 40) {
                const f = alert(`Ваш ІМТ (Індекс Маси Тіла): ${index.slice(0, 4)}\nУ вас ожиріння третього ступеню.`);
                break;
            }
        }
    }
} 
