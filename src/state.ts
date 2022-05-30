type Turn = "piedra" | "papel" | "tijera";

const state = {
    data: {
        myTurn: "",
        pcTurn: "",
        history: { me: 0, pc: 0 },
    },

    listeners: [],

    getState() {
        return this.data;
    },

    setState(newState: object) {
        this.data = newState;

        for (const cb of this.listeners) {
            cb();
        }

        localStorage.setItem("data", JSON.stringify(newState));
    },

    subscribe (callback: (any) => any) {
        this.listeners.push(callback);
    },

    theTurner(myTurn: Turn, pcTurn: Turn) {
        const currentState = this.getState();
        currentState.myTurn = myTurn;
        currentState.pcTurn = pcTurn;

        this.setState(currentState);
    },

    theWinner (myTurn: Turn, pcTurn: Turn) {
        // myTurn = piedra
        if (myTurn == "piedra" && pcTurn == "tijera") {
            return 1;
        } 
        if (myTurn == "piedra" && pcTurn == "papel") {
            return 0;
        }
        if (myTurn == "piedra" && pcTurn == "piedra") {
            return -1;
        }

        // myTurn = papel
        if (myTurn == "papel" && pcTurn == "piedra") {
            return 1;
        } 
        if (myTurn == "papel" && pcTurn == "tijera") {
            return 0;
        }
        if (myTurn == "papel" && pcTurn == "papel") {
            return -1;
        }

        // myTurn = tijera
        if (myTurn == "tijera" && pcTurn == "papel") {
            return 1;
        } 
        if (myTurn == "tijera" && pcTurn == "piedra") {
            return 0;
        }
        if (myTurn == "tijera" && pcTurn == "tijera") {
            return -1;
        }
    },

    pushToHistory(theWinner: number) {
        const currentState = state.getState();
        if (theWinner == 1) {
            currentState.history.me++;
        }
        if (theWinner == 0) {
            currentState.history.pc++;
        }
        state.setState(currentState);
    }
};

export { state };