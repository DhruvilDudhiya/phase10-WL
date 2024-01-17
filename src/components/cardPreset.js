
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class cardPreset extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__cardPreset"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setSize(90, 200)
		this.gameObjectPreset = this.gameObject.setInteractive();
		this.gameObjectPreset.input.cursor = "pointer";
		this.gameObjectPreset.on("pointerdown", (pointer) => {
			this.lastPosX = pointer.x;
			this.lastPosY = pointer.y;
			this.gameObjectPreset.x = pointer.x;
			this.gameObjectPreset.y = pointer.y;
			if (this.gameObjectPreset.x >= 371 && this.gameObjectPreset.x <= 508 && this.gameObjectPreset.y >= 715 && this.gameObjectPreset.y <= 924) {
				this.scene.oEmitManager.reqGrabOpenDeckCard(this.gameObjectPreset.cardColor, this.gameObjectPreset.cardLable, this.gameObjectPreset.cardId);
			}
			let parentContainerName = this.gameObjectPreset.parentContainer.name;
			this.handleParantContainerOperation(parentContainerName, this.gameObjectPreset);

		});

		this.gameObjectPreset.on("drag", (pointer, dragX, dragY) => {
			this.gameObjectPreset.x = pointer.x;
			this.gameObjectPreset.y = pointer.y;
		});
		this.gameObjectPreset.on("dragend", (pointer, dragX, dragY) => {
			this.gameObjectPreset.x = pointer.x - dragX;
			this.gameObjectPreset.y = pointer.y - dragY;
			if (this.gameObjectPreset.x >= 371 && this.gameObjectPreset.x <= 508 && this.gameObjectPreset.y >= 715 && this.gameObjectPreset.y <= 924) {
				this.gameObjectPreset.input.cursor = "pointer";
				this.putOpenDeckPosition();
			} else if (this.gameObjectPreset.x >= 157 && this.gameObjectPreset.x <= 520 && this.gameObjectPreset.y >= 1120 && this.gameObjectPreset.y <= 1290) {
				this.ownPlayerRule1Position();
			} else if (this.gameObjectPreset.x >= 575 && this.gameObjectPreset.x <= 915 && this.gameObjectPreset.y >= 1109 && this.gameObjectPreset.y <= 1305) {
				this.ownPlayerRule2Position();
			}
			else {
				this.playerHandPosition();
			}
		});

		/* END-USER-CTR-CODE */
	}

	/** @returns {cardPreset} */
	static getComponent(gameObject) {
		return gameObject["__cardPreset"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */
	handleParantContainerOperation(parentContainerName, cardObject) {
		switch (parentContainerName) {
			case "container_playerHand":
				this.gameObjectPreset.scene.container_playerHand.remove(cardObject);
				break;
			case "container_ownPlayerRule1":
				this.gameObjectPreset.scene.container_ownPlayerRule1.remove(cardObject);
				break;
			case "container_ownPlayerRule2":
				this.gameObjectPreset.scene.container_ownPlayerRule2.remove(cardObject);
				break;
			default:
				this.gameObjectPreset.scene.container_playerHand.add(cardObject);
				break;
		}
	}
	playerHandPosition = () => {
		this.gameObjectPreset.setPosition(parseFloat(this.lastPosX), parseFloat(this.lastPosY))
		this.gameObjectPreset.scene.container_playerHand.add(this.gameObjectPreset);
		this.gameObjectPreset.scene.oCardManager.arrengePlayerCardsData();
		this.gameObjectPreset.setScale(1);
	}
	putOpenDeckPosition = () => {
		this.gameObjectPreset.setPosition(this.gameObjectPreset.scene.cardHolder.x, this.gameObjectPreset.scene.cardHolder.y)
		this.gameObjectPreset.scene.oEmitManager.reqDiscardCard(this.gameObjectPreset.cardId);
		this.gameObjectPreset.visible = false;
	}
	ownPlayerRule1Position = () => {
		this.gameObjectPreset.scene.container_ownPlayerRule1.add(this.gameObjectPreset);
		this.gameObjectPreset.setScale(0.8);
		this.gameObjectPreset.setPosition(0, 0);
		this.gameObjectPreset.scene.oCheckRules.validateCards(this.gameObjectPreset.scene.container_ownPlayerRule1);
		this.gameObjectPreset.scene.oCardManager.arrengePlayerCardsData();
		this.gameObjectPreset.scene.oCardManager.arrengeRulesCardData(this.gameObjectPreset.scene.container_ownPlayerRule1, 2.4, 820);
	}
	ownPlayerRule2Position = () => {	
		this.gameObjectPreset.scene.container_ownPlayerRule2.add(this.gameObjectPreset);
		this.gameObjectPreset.setScale(0.8);
		this.gameObjectPreset.setPosition(0, 0);
		this.gameObjectPreset.scene.oCardManager.arrengePlayerCardsData();
		this.gameObjectPreset.scene.oCardManager.arrengeRulesCardData(this.gameObjectPreset.scene.container_ownPlayerRule2, 1, 800);
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
