let count = 0;
let resetChance = 0;
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
        resetChance = 0;
        count = 0;
        document.getElementById('ClickButton').style.backgroundColor = "#a91c1c";
    } else {
        resetChance += 0.66;
        count += 1;

    }

    if (count > highScore){
        highScore = count;
    }


    
    switch (Math.floor(count/10)){
        case 0: 
            buttonColor = "#a91c1c";
            break;
        case 1:
            buttonColor = "blue";
            break;
        case 2:
            buttonColor = "green";
            break;
    }

    displayArea.textContent = "Current Score: " + count;
    highScoreArea.textContent = "High Score: " + highScore;
    document.getElementById('ClickButton').style.backgroundColor = buttonColor;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

