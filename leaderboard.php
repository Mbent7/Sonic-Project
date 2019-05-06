<?php 




include "bddconnexion.php";


$query = $pdo->prepare("SELECT * FROM `board` ORDER BY score DESC ");

$query->execute();

$users = $query->fetchAll(PDO::FETCH_ASSOC);




include "leaderboard.phtml";





?>