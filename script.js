function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceTotal = document.getElementById("diceTotal");
    const values = [];
    const images = [];

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
    }
    const totalSum = values.reduce((acc, curr) => acc + curr, 0);

    diceResult.textContent = `Results: ${values.join(", ")}`    
    diceTotal.textContent = `Total: ${totalSum}`
    diceImages.innerHTML = images.join(" ");
}
let htmlBody = document.getElementById("htmlBody");
let darkmodeToggle = document.getElementById("darkmodeToggle");

darkmodeToggle.addEventListener('click', () => {
    htmlBody.classList.toggle("darkmode");
});