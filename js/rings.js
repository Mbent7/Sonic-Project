class Rings{
	constructor(){

		this.x = Math.random() * (1500 - 1000) + 1000;
		this.y =Math.random() * (270 - 200 )+ 200;
		this.width = 40;
		this.height = 40;
		this.speed = 5;

		this.ringsImage = new Image();
		this.ringsImage.src = "images/rings.png";
		this.FrameWidth = 123;
		this.FrameHeight = 120;
		this.FrameNumber = 16;
		this.SourceX = 0;
		this.SourceY = 0;
		this.FrameRateMax = 10;
		this.FrameRate = 0;
	}

	animate(){


		ctx.drawImage(this.ringsImage, this.SourceX, this.SourceY, this.FrameWidth, this.FrameHeight, this.x, this.y, this.width, this.height);
		this.FrameRate++;
		if(this.FrameRate >= this.FrameRateMax){
			this.SourceX += this.FrameWidth;
			if(this.SourceX > this.FrameWidth * this.FrameNumber -1){
				this.SourceX = 0;
			}
			this.FrameRate = 0;
		}		
	}
		move(){
		this.x -= this.speed;
	}

}
