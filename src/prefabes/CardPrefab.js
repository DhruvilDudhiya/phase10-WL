
// You can write more code here

/* START OF COMPILED CODE */

class CardPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 1.0237888026170197, y ?? -9);

		// cardSlicing
		const cardSlicing = scene.add.image(-2.0237888026170197, 2, "cardSlicing");
		cardSlicing.scaleX = 1.5;
		cardSlicing.scaleY = 1.5;
		this.add(cardSlicing);

		// cardNumber
		const cardNumber = scene.add.text(4, 1, "", {});
		cardNumber.setOrigin(0.5, 0.5);
		cardNumber.text = "1";
		cardNumber.setStyle({ "color": "#060606ff", "fontSize": "100px" });
		this.add(cardNumber);

		// container_cardBorders
		const container_cardBorders = scene.add.container(-51.02378880261702, -94);
		this.add(container_cardBorders);

		// card_border
		const card_border = scene.add.image(57, 94, "card-border");
		card_border.scaleX = 1.48;
		card_border.scaleY = 1.48;
		card_border.tintFill = true;
		card_border.tintTopLeft = 0;
		card_border.tintTopRight = 0;
		card_border.tintBottomLeft = 855309;
		card_border.tintBottomRight = 592137;
		container_cardBorders.add(card_border);

		// corner_2
		const corner_2 = scene.add.image(13, 20, "corner-2");
		corner_2.scaleX = 0.6;
		corner_2.scaleY = 0.6;
		corner_2.flipX = true;
		corner_2.flipY = true;
		corner_2.tintTopLeft = 0;
		corner_2.tintTopRight = 460551;
		corner_2.tintBottomLeft = 328965;
		corner_2.tintBottomRight = 1381653;
		container_cardBorders.add(corner_2);

		// corner
		const corner = scene.add.image(100, 166, "corner-2");
		corner.scaleX = 0.6;
		corner.scaleY = 0.6;
		corner.tintTopLeft = 1184274;
		corner.tintTopRight = 460551;
		corner.tintBottomLeft = 328965;
		corner.tintBottomRight = 1381653;
		container_cardBorders.add(corner);

		// cardNumber_upper
		const cardNumber_upper = scene.add.text(-40.02378880261702, -73, "", {});
		cardNumber_upper.setOrigin(0.5, 0.5);
		cardNumber_upper.text = "1";
		cardNumber_upper.setStyle({ "color": "#ffffffff", "fontSize": "30px" });
		this.add(cardNumber_upper);

		// cardNumber_lower
		const cardNumber_lower = scene.add.text(49.97621119738298, 74, "", {});
		cardNumber_lower.setOrigin(0.5, 0.5);
		cardNumber_lower.text = "1";
		cardNumber_lower.setStyle({ "color": "#ffffffff", "fontSize": "30px" });
		this.add(cardNumber_lower);

		// card_highLight
		const card_highLight = scene.add.image(6, 0, "card-border");
		card_highLight.scaleX = 1.65;
		card_highLight.scaleY = 1.65;
		card_highLight.visible = false;
		card_highLight.tintTopLeft = 16775196;
		card_highLight.tintTopRight = 16775196;
		card_highLight.tintBottomLeft = 16775196;
		card_highLight.tintBottomRight = 16775196;
		this.add(card_highLight);

		// this (components)
		new cardPreset(this);

		this.cardSlicing = cardSlicing;
		this.cardNumber = cardNumber;
		this.container_cardBorders = container_cardBorders;
		this.card_border = card_border;
		this.corner_2 = corner_2;
		this.corner = corner;
		this.cardNumber_upper = cardNumber_upper;
		this.cardNumber_lower = cardNumber_lower;
		this.card_highLight = card_highLight;

		/* START-USER-CTR-CODE */
		this.oScene = scene;
		this.oScene.input.setDraggable(this);
		this.cardId = "",
		this.cardLable = "",
		this.cardColor = "",
		this.cardScore = ""
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	cardSlicing;
	/** @type {Phaser.GameObjects.Text} */
	cardNumber;
	/** @type {Phaser.GameObjects.Container} */
	container_cardBorders;
	/** @type {Phaser.GameObjects.Image} */
	card_border;
	/** @type {Phaser.GameObjects.Image} */
	corner_2;
	/** @type {Phaser.GameObjects.Image} */
	corner;
	/** @type {Phaser.GameObjects.Text} */
	cardNumber_upper;
	/** @type {Phaser.GameObjects.Text} */
	cardNumber_lower;
	/** @type {Phaser.GameObjects.Image} */
	card_highLight;

	/* START-USER-CODE */

	// Write your code here.
	updateCardUi = (label, color, score) => {
		switch (label) {
			case 13:
				this.cardSlicing.setTexture("wild-card");
				this.cardSlicing.scaleX = 1,
				this.cardSlicing.scaleY = 1
				this.cardNumber_lower.visible = false;
				this.cardNumber_upper.visible = false;
				this.cardNumber.visible = false;
				this.container_cardBorders.visible = false;
				break;
			case 14:
				this.cardSlicing.setTexture("skip-card");
				this.cardSlicing.scaleX = 1
				this.cardSlicing.scaleY = 1
				this.cardNumber_lower.visible = false;
				this.cardNumber_upper.visible = false;
				this.cardNumber.visible = false;
				this.container_cardBorders.visible = false;
				break;
			default:
				break;
		}
		switch (color) {
			case "y":
				this.cardNumber.setStyle({ "color": "#facf15", "fontSize": "100px" });
				this.setBorderColors("#facf15");
				break;
			case "r":
				this.cardNumber.setStyle({ "color": "#f30204", "fontSize": "100px" });
				this.setBorderColors("#f30204");
				break;
			case "g":
				this.cardNumber.setStyle({ "color": "#39b030", "fontSize": "100px" });
				this.setBorderColors("#39b030");
				break;
			case "b":
				this.cardNumber.setStyle({ "color": "#4545ff", "fontSize": "100px" });
				this.setBorderColors("#4545ff");
				break;
			default:
				break;
		}
		this.cardNumber.setText(label);
		this.cardNumber_lower.setText(label);
		this.cardNumber_upper.setText(label);
	}
	setBorderColors = (color) => {
		this.card_border.setTint(Phaser.Display.Color.HexStringToColor(color).color);
		this.corner.setTint(Phaser.Display.Color.HexStringToColor(color).color);
		this.corner_2.setTint(Phaser.Display.Color.HexStringToColor(color).color);

	}
	setcardData = (label , color , id , score) => {
		this.cardLable = label;
		this.cardId = id;
		this.cardColor = color;
		this.cardScore = score;

	}
	checkHighCard(isHighCard) {
		if (isHighCard) {
			this.card_highLight.setVisible(true);
		}
		else {
			this.card_highLight.setVisible(false);
		}
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
