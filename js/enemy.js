class Enemy{
	constructor(){
		this.x = Math.random() * (1500 - 1000) + 1000;
		this.y = Math.random() * (270 - 150) + 150;
		this.width = Math.random() * (100 - 50) + 50;
		this.height = Math.random() * (100 - 50) + 50;
		this.speed = Math.random() * (10 - 5) + 5;

		this.beeImage = new Image();
		this.beeImage.src = "images/Bee.png";
		this.beeFrameWidth = 41.5;
		this.beeFrameHeight = 34;
		this.beeFrameNumber = 2;
		this.beeSourceX = 0;
		this.beeSourceY = 0;
		this.beeFrameRateMax = 8.5;
		this.beeFrameRate = 0;
	}
	move(){
		this.x -= this.speed;
	}
}