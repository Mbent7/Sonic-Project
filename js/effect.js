class Effect{

	constructor(){

		this.Image = new Image();
		this.Image.src = "images/effect.png";
		this.FrameRate = 0;
		this.FrameRateMax = 4;
		this.FrameWidth = 24;
		this.FrameHeight = 31;
		this.FrameNumber = 4;
		this.SourceX = 0;
		this.SourceY = 0;
		this.Width = 100;
		this.Height = 100;




	}

	animate(){
		ctx.drawImage(this.Image, this.SourceX, this.SourceY, this.FrameWidth,this.FrameHeight,hitEnemy.x, hitEnemy.y,hitEnemy.width,hitEnemy.height);
	
		this.FrameRate+=0.8;
		if(this.FrameRate >= this.FrameRateMax){
			this.SourceX += this.FrameWidth;
			if(this.SourceX > this.FrameWidth * this.FrameNumber -1){
				return;
			}
			this.FrameRate = 0;
		}		
	}
}