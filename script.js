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

function weightIndexENG (weight, height) {
    const greeting = alert('Greetings! Here you can calculate your body mass index. You need to know your parameters (weight and height) and insert them following instructions.');
    for (let i = 1; i >= 1; i++) {
        let userWeight = prompt('Your weight? (in kg)','');
        let userHeight = prompt('Your height? (in cm)','');
        weight = userWeight;
        height = userHeight;
        userWeight = Number(userWeight);
        userHeight = Number(userHeight);
        console.log(userWeight);
        if (userWeight == null || userHeight == null || userWeight == '' || userHeight == '' || isNaN(userWeight) == true || isNaN(userHeight) == true) {
            const indexError = alert('Something went wrong , please, check data and try again.');
            i--;
        } else {
            let index = weight / ((height / 100) * 2);
            index = (String(index));
            if (index < 16) {
                const a = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nYou are significantly underweight.`);
                break;
            } else if (index == 16 || index < 18.5) {
                const b = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nYou are underweight.`);
                break;
            } else if (index == 18.5 || index < 25) {
                const d = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nBody weight is normal.`);
                break;
            } else if (index == 25 || index < 30) {
                const c = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nYou are overweight.`);
                break;
            } else if (index == 30 || index < 35) {
                const d = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nYou have obesity of the first degree.`);
                break;
            } else if (index == 35 || index < 40) {
                const e = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nYou have obesity of the second degree.`);
                break;
            } else if (index == 40 || index > 40) {
                const f = alert(`Your BMI (Body Mass Index): ${index.slice(0, 4)}\nYou have obesity of the third degree.`);
                break;
            }
        }
    }
} 
