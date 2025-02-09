let count = 0;
let resetChance = 0.01;
let highScore = 0;
let buttonColor = "#a91c1c"

window.onload = function(){
    const clickButton = document.getElementById('ClickButton');
    const displayArea = document.getElementById('displayArea');
    const highScoreArea = document.getElementById('highScoreArea');

    displayArea.textContent = "Current Score: " + count;
    highScoreArea.textContent = "High Score: " + highScore;

    // Add an event listener to the button to listen for 'click' events
    clickButton.addEventListener('click', handleClick);

}

function handleClick() {
    if (resetChance > getRandomInt(0,100)){
        resetChance = 0.01;
        count = 0;
        buttonColor = "#a91c1c"
        // document.getElementById('ClickButton').style.backgroundColor = "#a91c1c";
    } else {
        resetChance *= 0.2;
        count += 1;

    }

    if (count > highScore){
        highScore = count;
    }

    if (count != 0 && count % 10 == 0){
        buttonColor = getRandomColor();
    }
    
    /* switch (Math.floor(count/10)){
        case 0: 
            buttonColor = "#a91c1c";
            break;
        case 1:
            buttonColor = "blue";
            break;
        case 2:
            buttonColor = "green";
            break;
        case 3:
            buttonColor = "yellow";
            break;
        case 4:
            buttonColor = getRandomColor();
    } */

    displayArea.textContent = "Current Score: " + count;
    highScoreArea.textContent = "High Score: " + highScore;
    document.getElementById('ClickButton').style.backgroundColor = buttonColor;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

