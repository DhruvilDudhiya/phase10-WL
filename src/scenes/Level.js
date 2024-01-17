
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(0, 0);

		// background
		const background = this.add.image(540, 974, "Background");
		container_background.add(background);

		// buttom_wood
		const buttom_wood = this.add.image(545, 1861, "buttom-wood");
		container_background.add(buttom_wood);

		// container_phase
		const container_phase = this.add.container(0, 0);
		container_phase.name = "container_phase";

		// name_box
		const name_box = this.add.image(540, 1845, "name-box");
		container_phase.add(name_box);

		// container_doubleRuleBox
		const container_doubleRuleBox = this.add.container(0, 0);
		container_phase.add(container_doubleRuleBox);

		// ownPlayerRule2Holder
		const ownPlayerRule2Holder = this.add.image(539, 1229, "ownPlayerRule2Holder");
		container_doubleRuleBox.add(ownPlayerRule2Holder);

		// ownPlayer_Rule1_text
		const ownPlayer_Rule1_text = this.add.text(322, 1037, "", {});
		ownPlayer_Rule1_text.setOrigin(0.5, 0.5);
		ownPlayer_Rule1_text.text = "Player2";
		ownPlayer_Rule1_text.setStyle({ "color": "#fbd775", "fontSize": "35px" });
		container_doubleRuleBox.add(ownPlayer_Rule1_text);

		// ownPlayer_Rule2_text
		const ownPlayer_Rule2_text = this.add.text(753, 1035, "", {});
		ownPlayer_Rule2_text.setOrigin(0.5, 0.5);
		ownPlayer_Rule2_text.text = "Player2";
		ownPlayer_Rule2_text.setStyle({ "color": "#fbd775", "fontSize": "35px" });
		container_doubleRuleBox.add(ownPlayer_Rule2_text);

		// ownPlayerTotalRules
		const ownPlayerTotalRules = this.add.text(539, 1434, "", {});
		ownPlayerTotalRules.setOrigin(0.5, 0.5);
		ownPlayerTotalRules.text = "Player2";
		ownPlayerTotalRules.setStyle({ "color": "#f9bc80", "fontSize": "40px" });
		container_doubleRuleBox.add(ownPlayerTotalRules);

		// ownPlayerScore
		const ownPlayerScore = this.add.text(540, 1864, "", {});
		ownPlayerScore.setOrigin(0.5, 0.5);
		ownPlayerScore.text = "100";
		ownPlayerScore.setStyle({ "color": "#895925", "fontSize": "35px" });
		container_doubleRuleBox.add(ownPlayerScore);

		// container_ownPlayerRule1
		const container_ownPlayerRule1 = this.add.container(330, 1205);
		container_ownPlayerRule1.name = "container_ownPlayerRule1";
		container_doubleRuleBox.add(container_ownPlayerRule1);

		// container_ownPlayerRule2
		const container_ownPlayerRule2 = this.add.container(770, 1205);
		container_ownPlayerRule2.name = "container_ownPlayerRule2";
		container_doubleRuleBox.add(container_ownPlayerRule2);

		// container_player2Box
		const container_player2Box = this.add.container(540, 250);
		container_player2Box.name = "container_player2Box";

		// player2_two_rules
		const player2_two_rules = this.add.container(0, 184);
		container_player2Box.add(player2_two_rules);

		// oppRule2
		const oppRule2 = this.add.image(-3, -78, "oppRule2");
		player2_two_rules.add(oppRule2);

		// player2_Rule1_text
		const player2_Rule1_text = this.add.text(-1, -12, "", {});
		player2_Rule1_text.setOrigin(0.5, 0.5);
		player2_Rule1_text.text = "Player2";
		player2_Rule1_text.setStyle({ "color": "#915819", "fontSize": "30px" });
		player2_two_rules.add(player2_Rule1_text);

		// player2_Rule2_text
		const player2_Rule2_text = this.add.text(4, 90, "", {});
		player2_Rule2_text.setOrigin(0.5, 0.5);
		player2_Rule2_text.text = "Player2";
		player2_Rule2_text.setStyle({ "color": "#915819", "fontSize": "30px" });
		player2_two_rules.add(player2_Rule2_text);

		// player2Name
		const player2Name = this.add.text(8, -173, "", {});
		player2Name.setOrigin(0.5, 0.5);
		player2Name.text = "Player2";
		player2Name.setStyle({ "color": "#fbd775", "fontSize": "35px" });
		container_player2Box.add(player2Name);

		// player2Score
		const player2Score = this.add.text(6, 105, "", {});
		player2Score.setOrigin(0.5, 0.5);
		player2Score.text = "100";
		player2Score.setStyle({ "color": "#895925", "fontSize": "35px" });
		container_player2Box.add(player2Score);

		// container_player3Box
		const container_player3Box = this.add.container(790, 310);
		container_player3Box.name = "container_player3Box";
		container_player3Box.visible = false;

		// player3Box
		const player3Box = this.add.image(0, 159, "score-display-board");
		container_player3Box.add(player3Box);

		// playerProfile
		const playerProfile = new PlayerProfile(this, 5, -17);
		container_player3Box.add(playerProfile);

		// player3Name
		const player3Name = this.add.text(2, 107, "", {});
		player3Name.setOrigin(0.5, 0.5);
		player3Name.text = "Player2";
		player3Name.setStyle({ "fontSize": "45px" });
		container_player3Box.add(player3Name);

		// player3_two_rules
		const player3_two_rules = this.add.container(0, 184);
		container_player3Box.add(player3_two_rules);

		// cardHolder2Player3
		const cardHolder2Player3 = this.add.image(0, 114, "Slicing-game-play");
		player3_two_rules.add(cardHolder2Player3);

		// cardHolder1Player3
		const cardHolder1Player3 = this.add.image(0, 0, "Slicing-game-play");
		player3_two_rules.add(cardHolder1Player3);

		// player3Score
		const player3Score = this.add.text(2, 97, "", {});
		player3Score.setOrigin(0.5, 0.5);
		player3Score.text = "100";
		player3Score.setStyle({ "fontSize": "35px" });
		container_player3Box.add(player3Score);

		// container_buttons
		const container_buttons = this.add.container(312, 1399);
		container_buttons.name = "container_buttons";

		// cancel_button
		const cancel_button = this.add.image(-3, -21, "cancel-button");
		container_buttons.add(cancel_button);

		// confirm_button
		const confirm_button = this.add.image(443, -13, "confirm-button");
		container_buttons.add(confirm_button);

		// back_card
		const back_card = this.add.image(640, 824, "phase-10-back-siede-card");

		// cardHolder
		const cardHolder = this.add.image(440, 821, "cardHolder");
		cardHolder.setInteractive(new Phaser.Geom.Rectangle(0, 0, 137, 206.95809063117812), Phaser.Geom.Rectangle.Contains);

		// container_playerHand
		const container_playerHand = this.add.container(0, 0);
		container_playerHand.name = "container_playerHand";

		// container_openedDeck
		const container_openedDeck = this.add.container(0, 0);
		container_openedDeck.name = "container_openedDeck";

		// container_players
		const container_players = this.add.container(0, 0);
		container_players.name = "container_players";

		// container_tempCards
		const container_tempCards = this.add.container(0, 0);
		container_tempCards.name = "container_tempCards";

		// back_button
		this.add.image(815, 1793, "back-button");

		// setting_button
		const setting_button = this.add.image(207, 1807, "setting-button");

		this.container_background = container_background;
		this.ownPlayer_Rule1_text = ownPlayer_Rule1_text;
		this.ownPlayer_Rule2_text = ownPlayer_Rule2_text;
		this.ownPlayerTotalRules = ownPlayerTotalRules;
		this.ownPlayerScore = ownPlayerScore;
		this.container_ownPlayerRule1 = container_ownPlayerRule1;
		this.container_ownPlayerRule2 = container_ownPlayerRule2;
		this.container_doubleRuleBox = container_doubleRuleBox;
		this.container_phase = container_phase;
		this.player2_Rule1_text = player2_Rule1_text;
		this.player2_Rule2_text = player2_Rule2_text;
		this.player2_two_rules = player2_two_rules;
		this.player2Name = player2Name;
		this.player2Score = player2Score;
		this.container_player2Box = container_player2Box;
		this.player3Name = player3Name;
		this.player3_two_rules = player3_two_rules;
		this.player3Score = player3Score;
		this.container_player3Box = container_player3Box;
		this.container_buttons = container_buttons;
		this.back_card = back_card;
		this.cardHolder = cardHolder;
		this.container_playerHand = container_playerHand;
		this.container_openedDeck = container_openedDeck;
		this.container_players = container_players;
		this.container_tempCards = container_tempCards;
		this.setting_button = setting_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Text} */
	ownPlayer_Rule1_text;
	/** @type {Phaser.GameObjects.Text} */
	ownPlayer_Rule2_text;
	/** @type {Phaser.GameObjects.Text} */
	ownPlayerTotalRules;
	/** @type {Phaser.GameObjects.Text} */
	ownPlayerScore;
	/** @type {Phaser.GameObjects.Container} */
	container_ownPlayerRule1;
	/** @type {Phaser.GameObjects.Container} */
	container_ownPlayerRule2;
	/** @type {Phaser.GameObjects.Container} */
	container_doubleRuleBox;
	/** @type {Phaser.GameObjects.Container} */
	container_phase;
	/** @type {Phaser.GameObjects.Text} */
	player2_Rule1_text;
	/** @type {Phaser.GameObjects.Text} */
	player2_Rule2_text;
	/** @type {Phaser.GameObjects.Container} */
	player2_two_rules;
	/** @type {Phaser.GameObjects.Text} */
	player2Name;
	/** @type {Phaser.GameObjects.Text} */
	player2Score;
	/** @type {Phaser.GameObjects.Container} */
	container_player2Box;
	/** @type {Phaser.GameObjects.Text} */
	player3Name;
	/** @type {Phaser.GameObjects.Container} */
	player3_two_rules;
	/** @type {Phaser.GameObjects.Text} */
	player3Score;
	/** @type {Phaser.GameObjects.Container} */
	container_player3Box;
	/** @type {Phaser.GameObjects.Container} */
	container_buttons;
	/** @type {Phaser.GameObjects.Image} */
	back_card;
	/** @type {Phaser.GameObjects.Image} */
	cardHolder;
	/** @type {Phaser.GameObjects.Container} */
	container_playerHand;
	/** @type {Phaser.GameObjects.Container} */
	container_openedDeck;
	/** @type {Phaser.GameObjects.Container} */
	container_players;
	/** @type {Phaser.GameObjects.Container} */
	container_tempCards;
	/** @type {Phaser.GameObjects.Image} */
	setting_button;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oGameManager = new GameManager(this);
		this.oPlayerManager = new PlayerManager(this);
		this.oInputManager = new InputManager(this);
		this.oEmitManager = new EmitManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oCardManager = new CardManager(this);
		this.oCheckRules = new CheckRules(this);
		this.instantiateSocketManager();
	}
	instantiateSocketManager() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const eGameType = urlParams.get('eGameType');
		const authToken = urlParams.get('sAuthToken');
		const iTableId = urlParams.get('iTableId');
		const sRootURL = urlParams.get('sRootUrl');
		const nPracticeChips = urlParams.get('nPracticeChips');
		this.oSocketManager = new SocketManager(this, eGameType, authToken, iTableId, sRootURL, nPracticeChips);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
