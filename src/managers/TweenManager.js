class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
        // this.oScene.oPlayerManager = this.playerManager;
        // this.oScene.oGameManager = this.gameManager;
        this.cards = [];
    }
    highCardAnimaton = (cardData) => {
        var self = this;
        for (let i = 0; i < 20; i++) {
            this.cards[i] = this.oScene.add.image(540, 885, 'phase-10-back-siede-card');
            this.cards[i].setScale(0.8);
            this.oScene.container_tempCards.add(this.cards[i]);
        }
        for (let j = 0; j < 20; j++) {
            if (j % 2 == 0) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: 540,
                    y: 1580,
                    duration: 500,
                    ease: 'Power4',
                    delay: (j * 100),
                });
            } else {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: this.oScene.oPlayerManager.player2.x,
                    y: this.oScene.oPlayerManager.player2.y,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    ease : 'Power4',
                    delay: (j * 100),
                })

            }
        }
        for(let j = 0; j < 20 ; j ++){
            if(j % 2 == 0){
                this.oScene.tweens.add({
                    targets : this.cards[j],
                    ease : "power2",
                    scaleX : 0,
                    scaleY : 0.8,
                    duration : 300,
                    delay: 3000,
                    flipX : true,
                    onComplete : () => {
                        this.cards[j].destroy();
                        // this.deckHolderSeprateAnimation();
                    }
                })
            }

        }
    }
    setHighCardAnimation(card) {
        console.log(card);
        this.oScene.tweens.add({
            targets: card,
            x: 540,
            y: 1550,
            duration: 600,
            ease: 'Power2',
            onComplete: () => {
                setInterval(() => {
                    this.oScene.container_tempCards.removeAll(true);
                }, 2000);
            }
        });
    }

    deckHolderSeprateAnimation = () => {
        this.oScene.tweens.add({
            targets: this.oScene.back_card,
            x: this.oScene.back_card.x + 80,
            duration: 500,
            ease: 'Power2',
        });
        this.oScene.tweens.add({
            targets: this.oScene.cardHolder,
            x: this.oScene.cardHolder.x - 80,
            duration: 500,
            ease: 'Power2',
        });
    }
    handCardAnimation = () => {
        console.log(this.oScene.container_playerHand);
    }
}