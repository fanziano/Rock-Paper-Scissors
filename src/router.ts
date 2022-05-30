import { initInstructions } from "./pages/instructions";
import { initWelcome } from "./pages/welcome/";
import { initGame } from "./pages/game";
import { initResult } from "./pages/result";

const BASE_PATH = "/Piedra-Papel-Tijera";
const routes = [
    {
        path: /\/welcome/,
        component: initWelcome,
    },
    {
        path: /\/instructions/,
        component: initInstructions,
    },
    {
        path: /\/game/,
        component: initGame,
    },
    
    {
        path: /\/result\/./,
        component: initResult,
    },
]

function isGithubPages() {
    return location.host.includes("github.io");
}

export function initRouter(containerEl: Element) {
  function goTo(route: string) {
    const completePath = isGithubPages() ? BASE_PATH + route : route;

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route: string) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    routes.forEach((r) => {
      if (r.path.test(newRoute)) {
        const page = r.component({ goTo: goTo });
        containerEl.firstChild?.remove();
        containerEl.appendChild(page);
      }
    });
  }

  if (
    window.location.pathname == "/Piedra-Papel-Tijera/" ||
    window.location.pathname == "/"
  ) {
    goTo("/welcome");
  } else {
    handleRoute(window.location.pathname);
  }
}