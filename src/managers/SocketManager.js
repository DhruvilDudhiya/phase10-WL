class SocketManager {
    constructor(oScene, eGameType, authToken, iTableId, sRootURL, nPracticeChips) {
        this.oScene = oScene;
        this.eGameType = eGameType;
        this.authToken = authToken;
        this.iTableId = iTableId;
        this.sRootURL = sRootURL;
        this.nPracticeChips = nPracticeChips;
        this.oRootSocketConn = io();

        //Root Socket conenction 
        this.oRootSocketConn = io(this.sRootURL, {
            transports: ['websocket', 'polling'],
            query: {
                authorization: authToken,
            },
        });
        // Root Socket Connection Events - Start
        this.oRootSocketConn.on('connect', () => {
            this.oScene.oGameManager.ownSocketId = this.oRootSocketConn.id;
        });
        this.oRootSocketConn.on('disconnect', () => {
            console.log("Disconnected from Socket");
        });
        this.oRootSocketConn.on('reconnect', () => {
            console.log("Reconnecting to Socket");
        });
        this.oRootSocketConn.on("error", (error) => {
            console.log("Connection Error :: ", error);
        });
        // Refresh Purpose
        this.oRootSocketConn.on(this.iTableId, (data) => {
            this.onReceivedData(data);
        });
        // Socket Connection
        this.oRootSocketConn.emit("reqJoinTable", { iTableId: this.iTableId }, (error, data) => {
            console.log("Event Emmited", data, error)
            this.onReceivedData(data);
        });
        this.emit = (sEventName, oData = {}, callback) => {
            this.oRootSocketConn.emit(this.iTableId, { sEventName, oData }, callback);
        }
    }
    onReceivedData(data) {
        switch (data.sEventName) {
            case undefined:
                console.log("undefined", data);
                this.oScene.oGameManager.setGameData(data.oData);
                for (let i = 0; i < data.oData.aParticipant.length; i++) {
                    this.oScene.oPlayerManager.setUserData(data.oData.aParticipant[i]);
                }
                this.oScene.oGameManager.setGameUi();
                break;
            case "resUserJoined":
                console.log("resUserJoined", data);
                this.oScene.oPlayerManager.setUserData(data.oData);
                if(data.oData.aHand.length != 0){
                    this.oScene.oCardManager.setPlayerHandCardData(data.oData.aHand);
                }
                break;  
            case "resPhaseData":
                console.log("resPhaseData", data); 
                this.oScene.oGameManager.setPhaseData(data.oData);
                // this.oScene.oTweenManager.deckHolderSeprateAnimation();
                break;
            case "resHandCardCount":
                console.log("resHandCardCount", data);
                break;
            case "resPlayerTurn":
                console.log("resPlayerTurn", data.oData);
                this.oScene.oPlayerManager.changePlayerTurn(data.oData);
                break;   
            case "resHighCards":
                console.log("resHighCards", data.oData);
                this.oScene.oCardManager.setHighCardData(data.oData);
                break;
            case "resHand":
                console.log("resHand", data.oData);
                this.oScene.oCardManager.setPlayerHandCardData(data.oData);
                break;
            case "resGameState":
                console.log('%c resGameState','color : #E3B34C', data.oData);
                break;
            case "resAutoDiscard":
                console.log('%c resAutoDiscard','color : #E3B34C', data.oData);
                break;
            case 'resOpenedDeck' :
                console.log('%c resOpenedDeck','color : #E3B34C', data.oData);
                this.oScene.oCardManager.resOpenedDeck(data.oData);
                break;
            case 'resClosedCard':
                console.log('%c resClosedCard','color : #E3B34C', data.oData);
                break;
            default:
                console.log('%c New Event !!!!!! ', 'color: #E3B34C', data.sEventName, data);
                break;
        }
    }
}