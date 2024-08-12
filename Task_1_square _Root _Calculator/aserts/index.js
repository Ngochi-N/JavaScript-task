
const calculateButton = document.getElementById('calculate');

        calculateButton.addEventListener('click', () => {  


            const num = parseFloat(document.getElementById('num').value);


            const result = document.getElementById('result');

            result.textContent = Square $ {Math.sqrt(num)};
        });
