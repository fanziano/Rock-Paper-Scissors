export class ButtonComp extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    typeText: string;

    constructor() {
        super();
        this.typeText = this.textContent || "body";
        this.render();
    }

    render() {
        const styleEl = document.createElement("style");
        
        this.shadow.innerHTML = `<button>${this.typeText}</button>`;

        styleEl.innerHTML = `
        button {
            font-family: Odibee Sans, sans-serif;
            font-size: 45px;
            font-weight: 400;
            color: white;
            width: 100%;
            height: 100%;
            padding: 8px;
            background-color: #006CFC;
            border-style: none;
            border: 10px solid #001997;
            border-radius: 10px;
        }`;

        this.shadow.querySelector("button").addEventListener("click", () => {
            const customEvent = new CustomEvent("click-btn-custom", {
                detail: {},
            });
            this.dispatchEvent(customEvent);
        });

        this.shadow.appendChild(styleEl);
    }
}

customElements.define("button-custom", ButtonComp);