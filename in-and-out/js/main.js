const options = ['the best', 'the bad'];

const addOptions = (e) => {
    e.preventDefault();
    options.push(document.querySelector('input').value);
    alert('Opcja została dodana!');
}

const showOptions = () => {
    alert(options.join('; '))
}

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    document.querySelector('h1').textContent = options[index];
}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = "";
}

document.querySelector('.add').addEventListener('click', addOptions)
document.querySelector('.showOptions').addEventListener('click', showOptions)
document.querySelector('.showAdvice').addEventListener('click', showAdvice)
document.querySelector('.clean').addEventListener('click', resetOptions)