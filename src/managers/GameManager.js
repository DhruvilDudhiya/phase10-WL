class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.nMaxPlayer = "";
        this.ownSocketId = "";
        this.ownPlayerId = "";
        this.cardGap = 70;
        this.rule1 = "";
        this.rule2 = "";
        this.rule1Cards = "";
        this.rule2Cards = "";
    }
    setGameData = ({ nMaxPlayer, nPhase , aOpenDeck}) => {
        this.nMaxPlayer = nMaxPlayer;
        this.oScene.oCardManager.setOpenDeckCardData(aOpenDeck);
    }
    setGameUi() {
        if (this.nMaxPlayer == 2) {
            this.oScene.container_player2Box.x = 540;
            this.oScene.container_player2Box.y = 250;
        } else {
            this.oScene.container_player2Box.x = 310;
            this.oScene.container_player2Box.y = 310;
            this.oScene.container_player3Box.visible = true;
            this.oScene.container_player3Box.x = 790;
            this.oScene.container_player3Box.y = 310;
        }
    }
    setPhaseData = ({ iUserId, nCurrentPhase, nNumberOfRules, nScore, nTotalPhasesCount, oCurrentPhase, aRules }) => {
        if (iUserId == this.oScene.oPlayerManager.ownPlayerProfile.name) {
            this.PlayerPhaseData( nCurrentPhase, nNumberOfRules, nScore, nTotalPhasesCount, oCurrentPhase, aRules , this.oScene.ownPlayer_Rule1_text , this.oScene.ownPlayer_Rule2_text, );
            this.playerScore(nScore , this.oScene.ownPlayerScore)
            this.rule1 = aRules[0].sRuleType;
            this.rule2 = aRules[1].sRuleType;
            this.rule1Cards = aRules[0].nNumberOfCards;
            this.rule2Cards = aRules[1].nNumberOfCards;

            this.oScene.ownPlayerTotalRules.text ="PHASE "+ nCurrentPhase + "/" + nTotalPhasesCount;
        } else {
            if (this.nMaxPlayer == 2) {
                switch (iUserId) {
                    case this.oScene.oPlayerManager.player2.name:
                        this.PlayerPhaseData( nCurrentPhase, nNumberOfRules, nScore, nTotalPhasesCount, oCurrentPhase, aRules , this.oScene.player2_Rule1_text , this.oScene.player2_Rule2_text);
                        this.playerScore(nScore ,  this.oScene.player2Score)
                        break;
                    default:
                        break;
                }
            }else if(this.nMaxPlayer == 3) {
                switch (iUserId) {
                    case this.oScene.oPlayerManager.player2.name:
                        this.PlayerPhaseData( nCurrentPhase, nNumberOfRules, nScore, nTotalPhasesCount, oCurrentPhase, aRules , this.oScene.player2_Rule1_text , this.oScene.player2_Rule2_text);
                        this.playerScore(nScore ,  this.oScene.player2Score)
                        break;
                    case this.oScene.oPlayerManager.player3.name:
                        this.PlayerPhaseData( nCurrentPhase, nNumberOfRules, nScore, nTotalPhasesCount, oCurrentPhase, aRules , this.oScene.player3_Rule1_text , this.oScene.player3_Rule2_text);
                        this.playerScore(nScore ,  this.oScene.player3Score)
                        break;
                    default:
                        break;
                }
            }
        }

    }
    PlayerPhaseData = ( nCurrentPhase, nNumberOfRules, nScore, nTotalPhasesCount, oCurrentPhase, aRules , playerRule1Text ,playerRule2Text , score ) => {
        playerRule1Text.text = aRules[0].sRuleType.toUpperCase()+" OF "+aRules[0].nNumberOfCards.toString().toUpperCase();
        playerRule2Text.text = aRules[1].sRuleType.toUpperCase()+" OF "+aRules[1].nNumberOfCards.toString().toUpperCase();
    }
    playerScore = (nScore , score) => {
        score.text = nScore;
    }
}