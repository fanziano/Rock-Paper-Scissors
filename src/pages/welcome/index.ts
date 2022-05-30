export function initWelcome(params: any) {
    const welcomeEl: HTMLElement = document.createElement("main");

    welcomeEl.classList.add("welcome__content");

    welcomeEl.innerHTML = `
    <div class="welcome__main">
        <div class="welcome__title-cont">
            <h1 class="welcome__title">Rock, Paper, Scissors</h1>
        </div>

        <div class="welcome__button">
            <button-custom class="button-custom">PLAY</button-custom>
        </div>
    </div>

    <div class="content__game">
        <div class="content__hands">
            <div class="content__hand-piedra">
                <hand-custom image="piedra"></hand-custom>
            </div>

            <div class="content__hand-papel">
                <hand-custom image="papel"></hand-custom>
            </div>

            <div class="content__hand-tijera">
                <hand-custom image="tijera"></hand-custom>
            </div>
        </div>
    </div>
    `;

    welcomeEl.querySelector("button-custom").addEventListener("click", (e) => {
        params.goTo("/instructions");
    });

    return welcomeEl;
}


