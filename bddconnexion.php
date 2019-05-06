<?php 

$pdo = new PDO("mysql:host=localhost;dbname=leaderboard","root","troiswa");



// la fonction exec sert à diverses choses, on l'utilise ici pour paramétrer l'encodage des résultats
$pdo->exec("SET NAMES UTF8");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 


?>