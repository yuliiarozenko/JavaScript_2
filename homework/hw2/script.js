const btn = document.querySelector('.btn');

function changeColor() {  
    const color = document.getElementById('field');
    const test_1 = document.body.style.backgroundColor;

    const input = document.getElementById('result');
    color.style.background = input.value;
}

btn.addEventListener('click', changeColor);

