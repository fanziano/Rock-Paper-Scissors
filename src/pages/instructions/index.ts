export function initInstructions(params: any) {
    const instEl: HTMLElement = document.createElement("main");

    instEl.classList.add("inst__content");

    instEl.innerHTML = `
    <div class="inst__main">
        <div class="inst__title-cont">
            <h1 class="inst__title">Press START and choose rock, paper, scissors within 3 seconds.</h1>
        </div>

        <div class="inst__button">
            <button-custom class="button-custom">START</button-custom>
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

    instEl.querySelector("button-custom").addEventListener("click", (e) => {
        params.goTo("/game");
    });

    return instEl;
}