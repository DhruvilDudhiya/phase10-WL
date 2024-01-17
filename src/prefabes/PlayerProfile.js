
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_playerProfile
		const container_playerProfile = scene.add.container(0, 0);
		this.add(container_playerProfile);

		// profile_bg
		const profile_bg = scene.add.image(0, 0, "profile-bg");
		container_playerProfile.add(profile_bg);

		// lodingTimer
		const lodingTimer = scene.add.image(0, -2, "loading-");
		lodingTimer.visible = false;
		container_playerProfile.add(lodingTimer);

		// bunny_profile
		const bunny_profile = scene.add.image(-2, 0, "bunny-profile");
		container_playerProfile.add(bunny_profile);

		this.lodingTimer = lodingTimer;
		this.bunny_profile = bunny_profile;

		/* START-USER-CTR-CODE */
		this.oScene = scene;
		this.shape = this.oScene.add.graphics();
		this.shape.visible= false;

		const makeShape = this.shape.createGeometryMask();
		this.lodingTimer.setMask(makeShape);
		this.shape.x = this.lodingTimer.x;
		this.shape.y = this.lodingTimer.y;
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	lodingTimer;
	/** @type {Phaser.GameObjects.Image} */
	bunny_profile;

	/* START-USER-CODE */

	// Write your code here.
	setTurntimer = (x ,y ,turnTimer) => {
        this.intervalTimeReset();
		this.lodingTimer.visible = true;
		let ttl = turnTimer / 1000;
		let start = 90;
		let end = 360 / ttl;
		let temp = end ;
		let self = this;
		this.intervalTimer = setInterval(() => {
			this.shape.slice(x , y , 128 , Phaser.Math.DegToRad(start), Phaser.Math.DegToRad(start + end)).fill();
			if(end >= 270){
				this.lodingTimer.tintFill = true;
				this.lodingTimer.setTintFill(0xaa0000);
			}
			if(end >= 360){
				self.intervalTimeReset();
			}
			end +=(temp / 10);

		} , 100)
	}
	intervalTimeReset(){
		this.shape.clear();
		this.lodingTimer.clearTint();
		this.lodingTimer.tintFill = false;
		this.lodingTimer.visible = false;
		clearInterval(this.intervalTimer);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
