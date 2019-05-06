class MainMenu{
	constructor(){
		document.getElementById("canvas").addEventListener("click", ()=>{
			context = game;
			sonic.ringCount = 1;
			sonic.score = 0;
			enemies.splice(0,enemies.length);
			ringlist.splice(0,ringlist.length);
		})
	}
	update(){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		ctx.font = "40px Georgia";
		ctx.fillText("Sonic Project", canvas.width/2, canvas.height/2, 200,200);
		ctx.font = "40px Georgia";
		ctx.fillText("Cliquez pour commencer", 350, 400);

	}
}