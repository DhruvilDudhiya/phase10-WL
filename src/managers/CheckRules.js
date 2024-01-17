class CheckRules {
    constructor(oScene) {
        this.oScene = oScene;
        this.cardColor = [];
        this.cardNumber = [];
        this.cardIds = [];
    }

    validateCards = (rulesContainer) => {
        if (rulesContainer.list.length == this.oScene.oGameManager.rule1Cards || rulesContainer.list.length == this.oScene.oGameManager.rule2Cards) {
            this.cardColor = [];
            this.cardNumber = [];
            this.cardIds = [];
            rulesContainer.list.forEach(card => {
                this.cardColor.push(card.color);
                this.cardNumber.push(card.cardLable);
                this.cardIds.push(card.id);
            });
            this.checkContainerRules(rulesContainer.name, rulesContainer)
        }
    }

    checkContainerRules = (containerName, containerRules) => {
        console.log(containerName, containerRules);
        if (containerName === "container_ownPlayerRule1") {
            this.checkRulesCondition(this.oScene.oGameManager.rule1, this.oScene.oGameManager.rule1Cards, containerName, containerRules)
        }
        if (containerName === "container_ownPlayerRule2") {
            this.checkRulesCondition(this.oScene.oGameManager.rule2, this.oScene.oGameManager.rule2Cards, containerName, containerRules)
        }
    }

    checkRulesCondition = (rule, totalCards, containerName, Container) => {
        switch (rule) {
            case "set":
                this.runRuleLogic(totalCards, containerName, Container);
                break;
            default:
                break;
        }
    }

    runRuleLogic(totalCards) {
        const wildCardNumber = 13;
        const wildCardCount = this.cardNumber.filter(card => card === wildCardNumber).length;

        // Logic for handling wild card
        if (wildCardCount > 0) {
            // Implement your logic here for handling wild card
            // For example, you can replace the wild card with any other card number
            const nonWildCardCount = totalCards - wildCardCount;
            const nonWildCardNumbers = this.cardNumber.filter(card => card !== wildCardNumber);
            const wildCardReplacementNumber = nonWildCardNumbers[0] 
            console.log(wildCardReplacementNumber);

            // Update the cardNumber array with the replacement number for wild cards
            this.cardNumber = this.cardNumber.map(card => card === wildCardNumber ? wildCardReplacementNumber : card);
            console.log(this.cardNumber);
        }


        // Sort the card numbers in ascending order
        // this.cardNumber.sort((a, b) => a - b);

        // Check if the card numbers form a valid run
        let isValidRun = true;
        for (let i = 1; i < this.cardNumber.length; i++) {
            if (this.cardNumber[i] !== this.cardNumber[i - 1] + 1) {
                console.log(this.cardNumber);
                isValidRun = false;
                break;
            }
        }

        // Print the result
        if (isValidRun) {
            console.log("The run rule is valid.");
        } else {
            console.log("The run rule is invalid.");
        }
    }
}