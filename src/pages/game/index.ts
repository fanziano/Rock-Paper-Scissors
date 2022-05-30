import { state } from "../../state";
type Turn = "piedra" | "papel" | "tijera";

export function initGame (params: any) {

    const gameEl: HTMLElement = document.createElement("main");
    const styleEl = document.createElement("style");

    gameEl.classList.add("game__content");

    gameEl.innerHTML = `
    <div class="game__countdown">3</div>  

    <div class="content__game">
        <div class="content__hands">
            <div class="content__hand-piedra">
                <hand-custom class="content__hand-custom piedra" image="piedra"></hand-custom>
            </div>

            <div class="content__hand-papel-papel">
                <hand-custom class="content__hand-custom papel" image="papel"></hand-custom>
            </div>

            <div class="content__hand-tijera">
                <hand-custom class="content__hand-custom tijera" image="tijera"></hand-custom>
            </div>
        </div>
    </div>`;

    styleEl.innerHTML = `
    .game__content {
        display: grid;
        padding: 100px 26px 0 26px;
        height: 100vh;
        gap: 30px;
    }
    
    @media (min-height: 550px) {
        .game__content {
            padding: 200px 26px 0 26px;
        }
    }
    
    .game__countdown {
        font-family: "Zilla Slab", sans-serif;
        font-weight: 700;
        border: 10px solid;
        height: 250px;
        width: 250px;
        border-radius: 50%;
        padding: 0 0 25px 0;
        font-size: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
     `;

    const handCustomEl = gameEl.querySelectorAll(".content__hand-custom");

    clickOnHand(handCustomEl, gameEl, params.goTo);
    gameEl.appendChild(styleEl);

    return gameEl;
}

function clickOnHand(handCustomEl: NodeList, contentEl: HTMLElement, goTo) {
    const countdownEl = contentEl.querySelector(".game__countdown");

    let counter = 3;
    const intervalId = setInterval(() => {
        counter--;
        if (counter == 0) {
            clearInterval(intervalId);
            goTo("/instructions");
        }

        countdownEl.textContent = counter.toString();
    }, 1000);

    handCustomEl.forEach((handEl: any) => {
        handEl.addEventListener("click", (e: any) => {
            clearInterval(intervalId);

            //piedra
            if (handEl.getAttribute("image") == "piedra") {
                listenClickOnHand("piedra", handCustomEl, contentEl, goTo);
            }
            //papel
            if (handEl.getAttribute("image") == "papel") {
                listenClickOnHand("papel", handCustomEl, contentEl, goTo);
            }
            //tijera
            if (handEl.getAttribute("image") == "tijera") {
                listenClickOnHand("tijera", handCustomEl, contentEl, goTo);
            }
        })
    })
}

function listenClickOnHand(myTurn: Turn, handCustomEl: NodeList, content: HTMLElement, goTo) {
    const turns = theMover(myTurn);
    const wins = state.theWinner(turns.myTurn, turns.pcTurn);
    state.pushToHistory(wins);

    setTimeout(() => {
        redirect(wins, goTo);
    }, 2000);

    setTimeout(() => {
        twoHands(content, turns.pcTurn, turns.myTurn)
    })

}

function theMover(myTurn: Turn){
    const numRandom = Math.floor(Math.random() * (4 - 1) + 1);
    let pcTurn: Turn;

    if (numRandom == 1) {
        pcTurn = "piedra";
        state.theTurner(myTurn, pcTurn);
        return {
            myTurn: myTurn,
            pcTurn: pcTurn,
        };
    }
    if (numRandom == 2) {
        pcTurn = "papel";
        state.theTurner(myTurn, pcTurn);
        return {
            myTurn: myTurn,
            pcTurn: pcTurn,
        };
    }
    if (numRandom == 3) {
        pcTurn = "tijera";
        state.theTurner(myTurn, pcTurn);
        return {
            myTurn: myTurn,
            pcTurn: pcTurn,
        };
    }
}

function redirect (wins: number, goTo) {
    if (wins == 1) {
        goTo("/result/ganaste");
    } else if (wins == 0) {
        goTo("/result/perdiste");
    } else {
        goTo ("/result/empate");
    }
}

function twoHands (content: HTMLElement, pcTurn: Turn, myTurn: Turn) {
    content.innerHTML = "";
    const myTurnEl = document.createElement("div");
    const pcTurnEl = document.createElement("div");
    const style = document.createElement("style");

    myTurnEl.classList.add("myHand");
    pcTurnEl.classList.add("pcHand");

    myTurnEl.innerHTML = `<hand-custom class="content__hand-custom" image="${myTurn}"></hand-custom>`;
    pcTurnEl.innerHTML = `<hand-custom class="content__hand-custom" image="${pcTurn}"</hand-custom>`;
    
    style.innerHTML = `
    .game__content {
        display: flex;
        justify-content: center;
        }
    .myHand {
        width: 150px;
        position: fixed;
        bottom: 0;
        }
    .pcHand {
        width: 150px;
        transform: rotate(-180deg);
        }
    `;

    content.appendChild(pcTurnEl);
    content.appendChild(myTurnEl);
    content.appendChild(style);
}
