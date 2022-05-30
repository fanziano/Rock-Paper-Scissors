import { state } from "../../state";

export function initResult(params: any) {

  function starGreenOrRed(resultEl: HTMLElement) {
    let resultImage: string = "";
    let resultTitle: string = "";

    if (location.pathname.includes("perdiste")) {
     resultImage = require("url:../../images/star-red.png");
      resultTitle = "You lose";
    } else if (location.pathname.includes("ganaste")) {
     resultImage = require("url:../../images/star-green.png");
      resultTitle = "You win";
      resultEl.classList.add("result--green");
    } else {
     resultImage = require("url:../../images/star-green.png");
      resultTitle = "Draw";
      resultEl.classList.add("result--green");
    }

    return {
      image: resultImage,
      title: resultTitle,
    };
  }

  function render() {
    const history = state.getState().history;
    const resultEl: HTMLElement = document.createElement("main");
    resultEl.classList.add("result");

    const star = starGreenOrRed(resultEl);

    resultEl.innerHTML = `   
    <div class="result__star">
        <p class="result__text-star">${star.title}</p>
        <img src="${star.image}" alt="" />
    </div>
    <div class="result__score">
        <p class="result__text-score">Score</p>
        <p class="result__text-player">Player: ${history.me}</p>
        <p class="result__text-pc">PC: ${history.pc}</p>
    </div>
    <div class="result__cont-button">
        <button-custom class="result__button">PLAY AGAIN</button-custom>
    </div>
`;

    if (star.title == "Draw") {
      resultEl.querySelector(".result__text-star").classList.add("result__text-star--draw");
    }

    resultEl.querySelector(".result__button").addEventListener("click", () => {
        params.goTo("/instructions");
      });

    return resultEl;
  }
  return render();
}