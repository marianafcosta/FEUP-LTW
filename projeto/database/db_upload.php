<?php
  
  include('../database/db_connection.php');

  function upload($username, $title, $description, $date,$image,$track,$channel) 
  {
    global $db;
    $stmt = $db->prepare('INSERT INTO stories(title,author,text,date,coverImage,track,channel) VALUES(?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute(array($title ,$username, $description,null, null, null,$channel));
  }
?>