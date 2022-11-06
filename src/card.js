class Card {
    #cardId;
    #cardShape;
    #cardNumber;
    #cardRole;

    constructor(cardId, cardShape, cardNumber, cardRole) {
        this.#cardId = cardId;
        this.#cardShape = cardShape;
        this.#cardNumber = cardNumber;
        this.#cardRole = card;
    }

    getCard() {
        return {
            cardId: this.#cardId,
            cardShape: this.#cardShape,
            cardNumber: this.#cardNumber,
            cardRole: this.#cardRole
        }
    }
}