<?php
    include_once('../includes/incl_session.php');
    include_once('../templates/tpl_common.php');
    include_once('../templates/tpl_account.php');
    include_once('../templates/tpl_profile.php');
    include_once('../database/db_account.php');
    include_once('../database/db_channels.php');

    $username = htmlentities($_GET['user']);

    if (!isset($_SESSION['username']) || $_SESSION['username'] != $username)
      die(header('Location: ../pages/mainpage.php'));

    draw_header($username);
    draw_navBar($_SESSION['username']);
    $subbed_channels = getSubbedChannels($username);
    //draw_sidebar($subbed_channels, false);

    $userdata = getUserData($username);

    printProfileEdit($userdata);

    draw_footer();
?>