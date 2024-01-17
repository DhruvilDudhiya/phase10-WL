class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.setting_button.setInteractive().on('pointerdown', () => {
			this.oScene.oEmitManager.reqLeave();
		});
        this.oScene.back_card.setInteractive().on('pointerdown', () => {
            this.oScene.oEmitManager.reqClosedCard();
        });
       
    }

}