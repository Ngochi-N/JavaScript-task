function checkEvenOdd(){
    const num = document.getElementById('num').value;

    const result = document.getElementById('result');

    if(num % 2 === 0){
        result.textContent = ${num} is even;

    }else{
        result.textContent = ${num} is odd;
    }
};