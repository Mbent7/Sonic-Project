"use strict";



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var sonic = new Sonic();
var mainMenu = new MainMenu();
var game = new Game();
var gameOver = new GameOver();
var context = mainMenu;

var enemies = [];
var effect = new Effect();
var hitEnemy;
var spawnTime = 2000;

var ringlist = [];
var ringsSpawnTime = 6000;

var scoreTime = 100;


var bg = new Background();
var bg2 = new Background();
bg2.x = 1022;

var lockInput = false;
var hitEffect = false;

var formscore = $("#submit");
formscore.hide();



setInterval(gameLoop, 1000/64);
setInterval(spawnEnemy, spawnTime);
setInterval(spawnRings, ringsSpawnTime);
setInterval(scoring, scoreTime);

document.addEventListener("keydown", onKeyPress);
document.addEventListener("keyup", onKeyUp);



function spawnEnemy(){
	enemies.push(new Enemy());
}

function spawnRings(){
	ringlist.push(new Rings());
}


function scoring(){

	sonic.score+=1;
	
	console.log(spawnTime);

	

}

setInterval(difficultyUp, 2300);

function difficultyUp(){
	for(var enemy of enemies){
		enemy.speed += 1;

	}
	for(var rings of ringlist){

		rings.speed +=1;
	}
	
}

function gameLoop(){
	context.update();
}



function onKeyPress(event){
	if(event.keyCode == 113 || event.keyCode == 81){

		sonic.left = true;
		sonic.right = false;
		sonic.speed +=0.1;	
	}	
	else if(event.keyCode == 100 || event.keyCode == 68){
		console.log(event.keyCode);
		if(sonic.speed < 40 && sonic.walk){
			sonic.speed += 0.8;
			sonic.sprint = true;
		}
		sonic.right = true;
		sonic.left = false;

	}

	else if(event.keyCode == 122 && sonic.isGrounded || event.keyCode == 90 && sonic.isGrounded){
		sonic.jumping(8,60);
	}

}

function onKeyUp(event){
	if(event.keyCode == 113 || event.keyCode == 81){
		sonic.left = false;
		sonic.sprint = false;
		sonic.speed = 3;
	}
	else if(event.keyCode == 100 || event.keyCode == 68){
		sonic.right = false;
		sonic.speed = 3;
		sonic.sprint = false;
	}
}

// Colision settings // 	-------------------------------------------------------------------

function CollisionPlayer(){
	for(var enemy of enemies){
		if(CollisionAlgorithm(sonic.x, sonic.y, enemy) && sonic.isGrounded && !sonic.gotHit){
			console.log("touch");
			sonic.gotHit = true;
			sonic.score -= 100;
			if (sonic.score < 0){
				sonic.score = 0; 
			}
			if(sonic.ringCount == 0){

				context = gameOver;
				formscore.show();
				$(".score").val(sonic.score);
			}
			var interval = setInterval(function(){
				if(sonic.gotHitTime < 50){
					lockInput = true;
					sonic.invu = true;
					sonic.gotHitTime++
					sonic.y-=9
					sonic.x-=7
					sonic.ringCount = 0;
					setTimeout(()=>{
						sonic.invu = false;lockInput = false; 				
						sonic.gotHitTime = 0;
						sonic.gotHit = false;
						clearInterval(interval);
					},725);
				}
			},10);	
		}
	}
}

function CollisionRings(){
	for(var rings of ringlist){
		if(CollisionAlgorithm(sonic.x + sonic.width/2 -12, sonic.y + 5, rings)){
			ringlist.splice(ringlist.indexOf(rings),1);
			sonic.score+=10;
			sonic.ringCount += 1;
			console.log("Je collide anneau");
			
		}	
	}
}

function CollisionTop(){
	for (var enemy of enemies){
		if(CollisionAlgorithm(sonic.x + sonic.width/2, sonic.y + sonic.height -50, enemy) && !sonic.isGrounded && !sonic.invu){
			enemies.splice(enemies.indexOf(enemy),1);
			sonic.jumping(7,50);
			sonic.score += 100;
			effect = new Effect();
			hitEnemy = enemy;
			hitEffect = true;

			setTimeout(()=>{hitEffect = false; hitEnemy = null;}, 1000);
		}
	}
}

function CollisionAlgorithm(posX, posY, p_collider)
{
	var x_space = getXspace(p_collider);
	var y_space = getYspace(p_collider);
	var bool = false;

	if ((posX > p_collider.x && posX < x_space) && (posY > p_collider.y && posY < y_space))
	{
		bool = true;
	}
	return bool;
}		

function getXspace(object)				// récupere largeur + x de l'objet
{
	var x_space;
	x_space = object.width + object.x;
	return x_space;
}

function getYspace(object)				// récupère hauteur + y du collider
{
	var y_space;
	y_space = object.height + object.y;
	return y_space;
}	
//------------------------//

