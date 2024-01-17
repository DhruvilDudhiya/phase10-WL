class CardManager {
    constructor(oScene){
        this.oScene = oScene;
    }
    setHighCardData = (data) => {
        for(let i = 0; i< data.length ; i++){
            if(data[i].iUserId == this.oScene.oPlayerManager.ownPlayerProfile.name){
                this.tempHighCard = this.oScene.add.existing(new CardPrefab(this.oScene,540 , 820));
                this.tempHighCard.updateCardUi(data[i].card.nLabel , data[i].card.eColor , data[i].card.nScore);
                this.oScene.container_tempCards.add(this.tempHighCard);
                this.oScene.oTweenManager.setHighCardAnimation(this.tempHighCard);
                this.tempHighCard.checkHighCard(data[i].isHigh);
            }else{
                this.tempHighCard1 = this.oScene.add.existing(new CardPrefab(this.oScene,540 , 820));
                this.tempHighCard1.updateCardUi(data[i].card.nLabel , data[i].card.eColor , data[i].card.nScore);
                this.oScene.container_tempCards.add(this.tempHighCard1);
                this.tempHighCard1.checkHighCard(data[i].isHigh);
            }
        }
    }
    setPlayerHandCardData = (cardData) => {
        this.ownPlayer1 =  this.oScene.oPlayerManager.ownPlayerProfile;
        for(let i = 0; i < cardData.length; i++){
            this.tempCard = this.oScene.add.existing(new CardPrefab(this.oScene,(this.oScene.container_playerHand.getAll().length * this.oScene.oGameManager.cardGap + 200 ), this.ownPlayer1.y - 100))
            this.tempCard.updateCardUi(cardData[i].nLabel , cardData[i].eColor ,cardData[i].nScore);
            this.tempCard.setName(cardData[i]._id);
            this.tempCard.setcardData(cardData[i].nLabel , cardData[i].eColor ,cardData[i]._id, cardData[i].nScore)
            this.oScene.container_playerHand.add(this.tempCard);
        }

    }
    setClosedCard = (cardData) => {
        this.oScene.container_playerHand.removeAll(true);
        this.setPlayerHandCardData(cardData);
    }
    setOpenDeckCardData = (aOpenDeck) => {
        for(let i = 0; i < aOpenDeck.length; i++){
            this.openDeckCard = this.oScene.add.existing(new CardPrefab(this.oScene, this.oScene.cardHolder.x - 10,this.oScene.cardHolder.y));
            this.openDeckCard.updateCardUi(aOpenDeck[i].nLabel , aOpenDeck[i].eColor ,aOpenDeck[i].nScore);
            this.openDeckCard.setName(aOpenDeck[i]._id);
            this.openDeckCard.setcardData(aOpenDeck[i].nLabel , aOpenDeck[i].eColor ,aOpenDeck[i]._id, aOpenDeck[i].nScore)
            this.oScene.container_openedDeck.add(this.openDeckCard);
        }
    }
    resOpenedDeck = ({aOpenDeck , iUserId , sAction}) => {
        // put , grab
        if(sAction == "grab"){
            this.oScene.container_openedDeck.removeAll(true);
        }
        this.setOpenDeckCardData(aOpenDeck)
    }
    arrengePlayerCardsData = () => {
        let i = 0;
        this.oScene.container_playerHand.getAll().forEach(cards => {
            cards.setPosition((i++ * this.oScene.oGameManager.cardGap),this.ownPlayer1.y - 100 )
        })
        this.oScene.container_playerHand.x = (1080 - ((this.oScene.container_playerHand.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
    arrengeRulesCardData = (cardContainer , y , x ) => {
        let i = 0;
        cardContainer.getAll().forEach(cards => {
            cards.setPosition((i++ * 45),0)
        })
        cardContainer.x = (x - ((cardContainer.getAll().length - 1) * 45)) / y;
    }

}