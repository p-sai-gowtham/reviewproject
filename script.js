const button = document.querySelector(".cal");
button.addEventListener('click', () => {
    const result = document.querySelector(".result");
    const amt = parseFloat(document.querySelector("#amt").value);
    const per = parseFloat(document.querySelector("#per").value);
    
    const value = eval(amt + 100 / per)
    result.innerHTML = `Total Amount: ${value}`;
});