import cards from "./card"
import { uuid } from 'uuidv4';

class Deck {
    #deckId;
    #cards;
    #cardSampleSpace;
    constructor(deckId) {
        this.deckId = this.#deckId;
        this.#cardSampleSpace = new Map();
        this.#cards = [];
    }

    static cardShapes() {
        const shapes = { "SQUARE": 1, "CIRCLE": 2, "TRIANGLE": 3, "STAR": 4, "CROSS": 5, "WHOT": 6 };
        return shapes;
    }

    getSampleSpaceForCard(cardType) {
        if (this.#cardSampleSpace.has(cardType)) {
            return this.#cardSampleSpace.get(cardType);
        }

        let sample;
        switch (cardType) {
            case "WHOT":
                sample = [20, 20, 20, 20, 20];
                return sample;
            case "SQUARE":
                sample = Array.from(Array(15).keys()).map(num => {
                    if (num != 0
                        && num != 4
                        && num != 6
                        && num != 8
                        && num != 9
                        && num != 12) {
                        return num;
                    }
                });
                this.#cardSampleSpace.set(cardType, sample);
                return sample;
            case "CIRCLE":
                sample = Array.from(Array(15).keys()).map(num => {
                    if (num != 0
                        && num != 6
                        && num != 9
                    ) {
                        return num;
                    }
                });
                this.#cardSampleSpace.set(cardType, sample);
                return sample;
            case "TRIANGLE":
                sample = Array.from(Array(15).keys()).map(num => {
                    if (num != 0
                        && num != 6
                        && num != 9
                    ) {
                        return num;
                    }
                });
                this.#cardSampleSpace.set(cardType, sample);
                return sample;
            case "CROSS":
                sample = Array.from(Array(15).keys()).map(num => {
                    if (num != 0
                        && num != 4
                        && num != 6
                        && num != 8
                        && num != 9
                        && num != 12) {
                        return num;
                    }
                });
                this.#cardSampleSpace.set(cardType, sample);
                return sample;
            case "STAR":
                sample = Array.from(Array(15).keys()).map(num => {
                    if (num == 1
                        || num == 2
                        || num == 3
                        || num == 4
                        || num == 5
                        || num == 8
                        || num == 7) {
                        return num;
                    }
                });
                this.#cardSampleSpace.set(cardType, sample);
                return sample;
            default:
                return [];
        }
    }

    makeDeck() {
        this.cardShapes.keys().map(cardShape => {
            let cardSampleSpace = getSampleSpaceForCard(cardShape);
            cardSampleSpace.map(cardNumber => {
                this.generateCard(cardShape, cardNumber);
            });
        });
    }

    generateCard(cardShape, cardNumber) {
        let newCard = new Card(
            uuid(),
            cardShape,
            cardNumber,
            this.getCardRole(cardNumber)
        );
        this.#cards.push(newCard.getCard);
    }

    getCardRole(cardNumber) {
        return "DEFAULT ROLE";
    }
}