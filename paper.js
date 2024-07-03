let random = Math.floor(Math.random() * 3);
setInterval(() => {
    random = Math.floor(Math.random() * 3);
    // console.log(random)
}, 2000);

const computerGenerated = document.getElementsByClassName(random);
let x = 0;
let y = 0;
let z = 0;
let clonedItemIndex;

const rock = document.getElementsByClassName('0')[0]
const paper = document.getElementsByClassName("1")[0]
const scissor = document.getElementsByClassName("2")[0]

const win = document.querySelector(".won")
const lose = document.querySelector(".lose")
const draw = document.querySelector(".draw")
const refresh = document.querySelector(".refresh")

const heading = document.querySelector(".head")
const gameContainer = document.querySelector(".game");
const gameItems = document.querySelectorAll(".game > div");

const originalDisplay = gameContainer.style.display;

const losingSound = document.getElementById("losingSound");
const drawSound = document.getElementById("drawSound");
const winingSound = document.getElementById("winingSound");

refresh.addEventListener("click", () => {
    location.reload();
})

rock.addEventListener("click", () => {

    gameItems.forEach((item, index) => {
        if (index === random && random === 0) {
            const newItem = item.cloneNode(true);
            clonedItemIndex = Array.from(item.parentNode.children).indexOf(item);
            gameContainer.appendChild(newItem);
        } else if (index !== 0 && index !== random) {
            item.style.display = 'none';
        }
    });

    if (random === 0) {
        heading.textContent = 'Draw!'
        x++;
        draw.textContent = `Draw = ${x}`
        drawSound.play();
    }
    else if (random === 1) {
        heading.textContent = 'You lose! Paper beats Rock!'
        y++;
        lose.textContent = `Lost = ${y} |`
        losingSound.play();
    }
    else {
        heading.textContent = 'You Win! Rock beats Scissor!'
        z++;
        win.textContent = `Won = ${z} |`
        winingSound.play();
    }


    setTimeout(() => {
        heading.textContent = "Choose :";

        gameItems.forEach(item => {
            item.style.display = '';
        });
        if (clonedItemIndex !== undefined) {
            clonedItemIndex = 3;
            gameContainer.removeChild(gameContainer.children[clonedItemIndex]);
        }
        gameContainer.style.display = originalDisplay;
    }, 2000);

})

paper.addEventListener("click", () => {
    gameItems.forEach((item, index) => {
        if (index === random && random === 1) {
            const newItem = item.cloneNode(true);
            clonedItemIndex = Array.from(item.parentNode.children).indexOf(item);
            gameContainer.appendChild(newItem);
        } else if (index !== 1 && index !== random) {
            item.style.display = 'none';
        }
    });

    if (random === 1) {
        heading.textContent = 'Draw!'
        x++;
        draw.textContent = `Draw = ${x}`
        drawSound.play();
    }
    else if (random === 2) {
        heading.textContent = 'You lose! Scissor beats Paper!'
        y++;
        lose.textContent = `Lost = ${y} |`
        losingSound.play();
    }
    else {
        heading.textContent = 'You Win! Paper beats Rock!'
        z++;
        win.textContent = `Won = ${z} |`
        winingSound.play();
    }

    setTimeout(() => {
        heading.textContent = "Choose :";
        gameItems.forEach(item => {
            item.style.display = '';
        });
        if (clonedItemIndex !== undefined) {
            clonedItemIndex = 3;
            gameContainer.removeChild(gameContainer.children[clonedItemIndex]);
        }
        gameContainer.style.display = originalDisplay;

    }, 2000);

})

scissor.addEventListener("click", () => {

    gameItems.forEach((item, index) => {
        if (index === random && random === 2) {
            const newItem = item.cloneNode(true);
            clonedItemIndex = Array.from(item.parentNode.children).indexOf(item);
            gameContainer.appendChild(newItem);
        } else if (index !== 2 && index !== random) {
            item.style.display = 'none';
        }
    });

    if (random === 2) {
        heading.textContent = 'Draw!'
        x++;
        draw.textContent = `Draw = ${x}`
        drawSound.play();
    }
    else if (random === 0) {
        heading.textContent = 'You lose! Rock beats Scissor!'
        y++;
        lose.textContent = `Lost = ${y} |`
        losingSound.play();
    }
    else {
        heading.textContent = 'You Win! Scissor beats Paper!'
        z++;
        win.textContent = `Won = ${z} |`
        winingSound.play();
    }

    setTimeout(() => {
        heading.textContent = "Choose :";
        gameItems.forEach(item => {
            item.style.display = '';
        });
        if (clonedItemIndex !== undefined) {
            clonedItemIndex = 3;
            gameContainer.removeChild(gameContainer.children[clonedItemIndex]);
            console.log("ajay")
        }
        gameContainer.style.display = originalDisplay;

    }, 2000);

})
