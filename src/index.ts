import {} from "./components/button";
import {} from "./components/hand";
import { state } from "./state";
import { initRouter } from "./router";

(function main() {
    if (localStorage.getItem("data")) {
        state.setState(JSON.parse(localStorage.getItem("data")));
    }

    const rootEl = document.querySelector("#root");
    initRouter(rootEl);
})();