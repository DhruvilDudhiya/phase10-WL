class EmitManager {
    constructor(oScene) {
        this.oScene = oScene;

    }
    reqLeave = () => {
        this.oScene.oSocketManager.emit('reqLeave', { iTableId: this.oScene.oSocketManager.iTableId });
        window.close();
    }
    reqClosedCard = () => {
        this.oScene.oSocketManager.emit('reqClosedCard', {}, (error, response) => {
            console.warn("response reqClosedCard :", response, error)
            if (response != undefined) {
                this.oScene.oCardManager.setClosedCard(response);
                this.oScene.oCardManager.arrengePlayerCardsData();
            }
        });
    }
    reqGrabOpenDeckCard = (color, lable, id) => {
        this.oScene.oSocketManager.emit('reqOpenedCard', {
            nLabel: this.currentOwnCardLabel, eColor: color, _id: id, iUserId: lable},(error, response) => {
                console.warn("reqGrabOpenDeckCard :", response, error);
                if (response != undefined) {
                    this.oScene.oCardManager.setClosedCard(response);
                    this.oScene.oCardManager.arrengePlayerCardsData();
                }
            });
    }
    reqDiscardCard = (cardId) => {
        console.log(cardId);
        this.oScene.oSocketManager.emit("reqDiscardCard",{iCardId : cardId}, (error, response) => {
            console.warn("reqDiscardCard :", response, error);
            if (response != undefined) {
                this.oScene.oCardManager.setClosedCard(response);
                this.oScene.oCardManager.arrengePlayerCardsData();
            }
        });

    }
}