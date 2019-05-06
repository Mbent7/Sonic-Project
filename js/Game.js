class Game{
	constructor(){
		document.getElementById("canvas").removeEventListener("click", ()=>{
			context = game;
		

		})
	}
	update(){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		ctx.drawImage(bg.image, bg.x, bg.y, bg.width, bg.height);
		ctx.drawImage(bg2.image, bg2.x, bg2.y, bg2.width, bg2.height);
		ctx.font = "30px Arial ";
		ctx.fillStyle = "white";
		ctx.fillText("Score : "+sonic.score, 10, 30);
		ctx.font = "30px Arial ";
		ctx.fillStyle = "gold";
		ctx.fillText("Rings: "+sonic.ringCount, 10, 80);



		if (bg.x <= -1022){ 
			
			let diff = bg.x + 1022
			bg.x = 1022 - Math.abs(diff);
		}


		if(bg2.x <= -1022){
			let diff = bg2.x + 1022
			bg2.x = 1022 - Math.abs(diff);
		}

		if(!sonic.walk && !sonic.gotHit && sonic.isGrounded && !sonic.sprint){
			sonic.currentImage.src = sonic.image.src;
			ctx.drawImage(sonic.currentImage, sonic.x, sonic.y, sonic.width, sonic.height);
		}
		else if(sonic.walk && !sonic.gotHit && sonic.isGrounded && !sonic.sprint ){
			sonic.currentImage.src = sonic.run.src;
			ctx.drawImage(sonic.currentImage, sonic.sourceX, sonic.sourceY, sonic.frameWidth, sonic.frameHeight, sonic.x, sonic.y, sonic.width, sonic.height);
		}
		if(!sonic.isGrounded && !sonic.gotHit ){
			sonic.currentImage.src = sonic.jumpImage.src;
			ctx.drawImage(sonic.currentImage, sonic.jumpSourceX, sonic.jumpSourceY, sonic.jumpFrameWidth, sonic.jumpFrameHeight, sonic.x, sonic.y, sonic.jumpWidth, sonic.jumpHeight);
		}

		if(sonic.gotHit){
			sonic.currentImage.src = sonic.gotHitImage.src;
			ctx.drawImage(sonic.currentImage, sonic.gotHitSourceX, sonic.gotHitSourceY, sonic.gotHitFrameWidth,sonic.gotHitFrameHeight,sonic.x, sonic.y,sonic.gotHitWidth,sonic.gotHitHeight);

		}
		if(sonic.sprint && sonic.isGrounded){
			sonic.currentImage.src = sonic.sprintImage.src;
			ctx.drawImage(sonic.currentImage, sonic.sprintSourceX, sonic.sprintSourceY, sonic.sprintFrameWidth,sonic.sprintFrameHeight,sonic.x, sonic.y,sonic.sprintWidth,sonic.sprintHeight);

		}




		for(var enemy of enemies){
			ctx.drawImage(enemy.beeImage, enemy.beeSourceX, enemy.beeSourceY, enemy.beeFrameWidth, enemy.beeFrameHeight, enemy.x, enemy.y, enemy.width, enemy.height);
			enemy.move();
			enemy.beeFrameRate++;
			if(enemy.beeFrameRate >= enemy.beeFrameRateMax){
				enemy.beeSourceX += enemy.beeFrameWidth;
				if(enemy.beeSourceX > enemy.beeFrameWidth * enemy.beeFrameNumber -1){
					enemy.beeSourceX = 0;
				}
				enemy.beeFrameRate = 0;
			}
		}


		for(var rings of ringlist){
			rings.animate();	
			rings.move();
			
		}

		sonic.frameRate++;
		if(sonic.frameRate >= sonic.frameRateMax){
			sonic.sourceX += sonic.frameWidth;
			if(sonic.sourceX > sonic.frameWidth * sonic.frameNumber -1){
				sonic.sourceX = 0;
			}
			sonic.frameRate = 0;
		}

		sonic.jumpFrameRate++;
		if(sonic.jumpFrameRate >= sonic.jumpFrameRateMax){
			sonic.jumpSourceX += sonic.jumpFrameWidth;
			if(sonic.jumpSourceX > sonic.jumpFrameWidth * sonic.jumpFrameNumber -1){
				sonic.jumpSourceX = 0;
			}
			sonic.jumpFrameRate = 0;
		}

		sonic.gotHitframeRate++;
		if(sonic.gotHitFrameRate >= sonic.gotHitFrameRateMax){
			sonic.gotHitSourceX += sonic.gotHitFrameWidth;
			if(sonic.gotHitSourceX > sonic.gotHitFrameWidth * sonic.gotHitFrameNumber -1){
				sonic.gotHitSourceX = 0;
			}
			sonic.gotHitFrameRate = 0;
		}

		sonic.sprintFrameRate++;
		if(sonic.sprintFrameRate >= sonic.sprintFrameRateMax){
			sonic.sprintSourceX += sonic.sprintFrameWidth;
			if(sonic.sprintSourceX > sonic.sprintFrameWidth * sonic.sprintFrameNumber -1){
				sonic.sprintSourceX = 0;
			}
			sonic.sprintFrameRate = 0;
		}

		bg.x -= 2;
		bg2.x -= 2;

		if(sonic.left && sonic.x >10 && !lockInput){
			sonic.x -= sonic.speed*2;
			sonic.walk = true;
			sonic.sprint = false;
			


		}else if(sonic.x < 10 && !lockInput){
			sonic.x += 10;
		}

		if (sonic.right && sonic.x < 690 && !lockInput){
			sonic.x += sonic.speed;
			sonic.walk = true;	

		}else if(sonic.x > 690 && !lockInput){
			sonic.x -= 1;

		}

		if (!sonic.isGrounded){
			sonic.y += sonic.gravity;
		}

	// if (sonic.gotHit && !sonic.invu){
	// 	var interval = setInterval(function(){
	// 		if(sonic.gotHitTime < 50){
	// 			lockInput = true;
	// 			sonic.invu = true;
	// 			sonic.gotHitTime++
	// 			sonic.y-=8
	// 			sonic.x-=5
	// 			setTimeout(()=>{
	// 				sonic.invu = false;lockInput = false; 				
	// 				sonic.gotHitTime = 0;
	// 				sonic.gotHit = false;
	// 				clearInterval(interval);
	// 			},700);
	// 		}
	// 	},10);
	// }


	if(sonic.y < sonic.ground){
		sonic.isGrounded = false;
	}else{
		sonic.isGrounded = true;
		sonic.jump = false;
	}

	if(hitEffect){

		effect.animate();

		
	}


	CollisionRings();
	CollisionPlayer();
	CollisionTop();
}
}