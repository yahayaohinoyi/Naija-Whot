class Player {
    #userName;
    #playerId;
    #cards;

    constructor(name, id, cards) {
        this.#playerId = id;
        this.#userName = name;
        this.#cards = cards;
    }

    getName() {
        return this.#userName;
    }

    getPlayerId() {
        return this.#playerId;
    }

    getCards() {
        return this.#cards;
    }
}