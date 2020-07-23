function bmi() {

    let weight = document.querySelector('.weight').value;
    let height = document.querySelector('.height').value;

    let bmi = (weight / (height * height) * 10000).toFixed(2);

    if (bmi < 18.5) {
        document.querySelector('.bmi').value = bmi + ' Underweight';
    } else if (bmi < 25) {
        document.querySelector('.bmi').value = bmi + ' Normal';
    } else if (bmi < 30) {
        document.querySelector('.bmi').value = bmi + ' Overweight';
    } else {
        document.querySelector('.bmi').value = bmi + ' Obese';
    }
}

document.querySelector('#btn').addEventListener('click', bmi);