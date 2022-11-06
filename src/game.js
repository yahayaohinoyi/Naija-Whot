import Deck from './deck'
class Game {
    #gameId;
    #players;
    #deck;
    #turn;
    #face;
    #market;
    #undoRedoStack;
    #lastmove;

    constructor (gameId, players) {
        this.#gameId = gameId;
        this.#players = players;
        this.#turn = 0;
        this.#market = [];
        this.#undoRedoStack = [];
    }

    turn() {
        return this.#turn % this.#players.length;
    }

    play(card) {

    }

    validateMove(card) {
        const faceCard = this.#face(card.cardNumber, card.cardShape);
        return (
            card.cardNumber == 20 ||
            (card.cardNumber == faceCard.cardNumber 
                && card.cardShape == faceCard.cardShape)
        )
    }

    face(cardNumber, cardShape) {
        return [
            cardNumber,
            cardShape
        ]
    }

    checkWin(player) {
        if (this.#market.length !== 0) {
            return [player.getCards().length == 0, player];
        }
        let min = [Infinity, null];
        this.#players.map((player, idx) => {
            const cardSum = player.getCards().reduce((prev, pres) => {
                return prev + pres;
            });
            min = cardSum < min[0] ? min = [cardSum, player] : min;
        });
        const winner = min[0];
        return [winner.getCards().length == 0, winner];
    }

    undo() {
        this.#undoRedoStack.pop();
    }

    redo() {
        this.#undoRedoStack.push(this.#lastmove);
    }
}