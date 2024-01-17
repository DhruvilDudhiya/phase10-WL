class PlayerManager{
    constructor(oScene){
        this.oScene = oScene;
        this.players = new Map();
        
    }
    setUserData = (oData) => {
        if(!this.players.has(oData.iUserId)){
            this.players.set(oData.iUserId, oData.sUserName);
            this.setUserInfo(oData);
        }
    }
   setUserInfo = ({iUserId ,sUserName , sRootSocket , eState, nBalance , nRound , nScore ,nTurnCount ,nMissedTurn }) => {
      if(sRootSocket == this.oScene.oGameManager.ownSocketId){
            this.ownPlayerProfile = new PlayerProfile(this.oScene,540 , 1735);
            this.oScene.container_players.add(this.ownPlayerProfile);
            this.oScene.oGameManager.ownPlayerId = iUserId;
            this.ownPlayerProfile.setName(iUserId);
      }else{
            switch (this.oScene.oGameManager.nMaxPlayer) {
                case 2:
                    this.player2 = new PlayerProfile(this.oScene,540 ,220);
                    this.player2.bunny_profile.setTexture("Duck-profile");
                    this.oScene.container_players.add(this.player2);
                    this.oScene.player2Name.setText(sUserName.length > 5 ? sUserName.slice(0,5) + "..." : sUserName);
                    this.player2.setName(iUserId);
                    break;
                case 3:
                    this.player2 = new PlayerProfile(this.oScene,540 ,300);
                    this.oScene.player2Name.setText(sUserName.length > 5 ? sUserName.slice(0,5) + "..." : sUserName);
                    this.player2.bunny_profile.setTexture("Duck-profile");
                    this.player2.setName(iUserId);
                    
                    this.player3 = new PlayerProfile(this.oScene,5 , -17);
                    this.oScene.container_player3Box.add(this.player3);
                    this.oScene.player3Name.setText(sUserName.length > 5 ? sUserName.slice(0,5) + "..." : sUserName);
                    this.player2.bunny_profile.setTexture("Duck-profile");
                    this.player3.setName(iUserId);
                default:
                    break;
            }
          
         }
      }
      changePlayerTurn = ({eTurnType ,iUserId ,initialValue ,nGraceTime , nTotalTurnTime , ttl }) => {
        this.currentPlayerTurn = iUserId;
        if(iUserId == this.ownPlayerProfile.name){

        }
        for(let i = 0 ; i <this.players.size ; i++){
            for(let j = 0 ; j < this.players.size ; j++){
              if(this.oScene.container_players.getAll()[j].name !== this.currentPlayerTurn){
                this.ownPlayerTurnReset = " ";
                this.oScene.container_players.getAll()[j].intervalTimeReset();
              }
            }
            if(this.oScene.container_players.getAll()[i].name === this.currentPlayerTurn){
                this.ownPlayerTurnReset = this.oScene.container_players.getAll()[i];
                this.oScene.container_players.getAll()[i].setTurntimer(this.oScene.container_players.getAll()[i].x , this.oScene.container_players.getAll()[i].y, ttl);
                break;
            }

        }

      }

}