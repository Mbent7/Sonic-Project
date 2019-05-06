<?php

include "bddconnexion.php";

$pseudo = $_POST["pseudo"];
$score = $_POST["score"];
$higher = false;


$query = $pdo->prepare("SELECT * FROM `board` WHERE pseudo = ? ORDER BY score DESC ");

$query->execute([$pseudo]);

$user = $query->fetch(PDO::FETCH_ASSOC);


if($user){
	if($score > $user["score"]) {
		$higher = true;
	} 
	else{
		$higher = false;
	}
	if ($higher) {
		$query = $pdo->prepare("UPDATE board SET score = ? WHERE pseudo = ?");

		$query->execute([$score, $pseudo]);
	}
}
else{
	$query = $pdo->prepare("INSERT INTO board (pseudo,score) VALUES (?,?)");

	$createscore = [$pseudo,$score];

	$query->execute($createscore);
}
	
	




header("Location: leaderboard.php");




?>