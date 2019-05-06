class GameOver{

	constructor(){




	}

	update(){

		ctx.clearRect(0,0,canvas.width, canvas.height)
		ctx.font = "40px Georgia";
		ctx.fillText("Game Over", canvas.width/2, canvas.height/2, 200,200);
		ctx.font = "40px Georgia";
		ctx.fillText("Cliquez pour rejouer", 350, 400);





	}
}