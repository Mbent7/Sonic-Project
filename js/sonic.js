class Sonic{
	constructor(){

		//Image sources//

		this.image = new Image();
		this.image.src = "images/sonic.png";
		this.run = new Image();
		this.run.src = "images/SonicRun.png";
		this.currentImage = new Image();
		this.currentImage.src = "images/sonic.png";
		this.jumpImage = new Image();
		this.jumpImage.src = "images/sonicJump.png";
		this.gotHitImage = new Image();
		this.gotHitImage.src = "images/gotHit.png";
		this.sprintImage = new Image();
		this.sprintImage.src = "images/sonicSprint.png";



		//----------------//

		this.walk = true;
		this.left = false;
		this.right = false;
		this.jump = false;

		// Image settings //
		this.x = 0;
		this.y = 0;
		this.width = 80;
		this.height = 100;
		this.speed = 5;
		this.frameWidth = 38;
		this.frameHeight = 39;
		this.frameNumber = 8;
		this.sourceX = 0;
		this.sourceY = 0;
		this.frameRateMax = 8;
		this.frameRate = 0;
		this.jumpFrameRate = 0;
		this.jumpFrameRateMax = 5;
		this.jumpFrameWidth = 31.5;
		this.jumpFrameHeight = 30;
		this.jumpFrameNumber = 5;
		this.jumpSourceX = 0;
		this.jumpSourceY = 0;
		this.jumpWidth = 60;
		this.jumpHeight = 80;

		this.gotHitFrameRate = 0;
		this.gotHitFrameRateMax = 8;
		this.gotHitFrameWidth = 39.5;
		this.gotHitFrameHeight = 28;
		this.gotHitFrameNumber = 2;
		this.gotHitSourceX = 0;
		this.gotHitSourceY = 0;
		this.gotHitWidth = 60;
		this.gotHitHeight = 80;

		this.sprintFrameRate = 0;
		this.sprintFrameRateMax = 3;
		this.sprintFrameWidth = 34;
		this.sprintFrameHeight = 36;
		this.sprintFrameNumber = 4;
		this.sprintSourceX = 0;
		this.sprintSourceY = 0;
		this.sprintWidth = 80;
		this.sprintHeight = 100;
		// ---------- //
		this.invu = false;
		// gravity settings //
		this.isGrounded = false;
		this.ground = 270;
		this.gravity = 9;
		this.jumpingHeight = 0;
		// ---------------//


		this.gotHit = false;
		this.gotHitTime = 0;
		this.score = 0;
		this.ringCount = 1;

		this.sprint = false;

	}

	jumping(jumpForce, speed){
		sonic.jump = true;
		var interval = setInterval(function(){
			if(sonic.jumpingHeight < speed){
				sonic.jumpingHeight++
				sonic.y-=jumpForce		
			}
			else{
				sonic.jumpingHeight = 0;
				clearInterval(interval);
			}
		},10);	
	}
}