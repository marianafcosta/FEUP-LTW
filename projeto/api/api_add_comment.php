<?php

    include_once('../includes/incl_session.php');
    include_once('../database/db_channels.php');
    include_once('../database/db_stories.php');

    $user = $_POST['user'];
    $story = $_POST['story'];
    $comment = $_POST['comment'];

    //try {
      $lastInsertId = addComment($user, $story, $comment);
      //header("Location: ".$prev_page);
    //} catch (PDOException $e) {
      //$_SESSION['messages'][] = array('type' => 'error', 'content' => "Unable to post comment");
      //die(header("Location: ".$prev_page));
    //}

    //RETURN COMMENT!!
    echo json_encode(getComment($lastInsertId));
?>