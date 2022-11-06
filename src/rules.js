class Rule {
    #rule;
    constructor(rule = "classic") {
        this.#rule = rule;
    }

    getRules() {
        if (this.#rule == "classic") {
            return {
                1: "HOLD ON",
                2: "PICK TWO",
                5: "PICK THREE",
                8: "SUSPENSION",
                14: "GENERAL MARKET"
            }
        } else if (this.#rule == "remove-suspension") {
            return {
                1: "HOLD ON",
                2: "PICK TWO",
                5: "PICK THREE",
                8: "SUSPENSION"
            }
        } else if (this.#rule == "remove-pick-three") {
            return {
                1: "HOLD ON",
                2: "PICK TWO",
                5: "PICK THREE",
                8: "SUSPENSION"
            }
        }
    }
}