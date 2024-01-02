<?php
// set_session.php
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json");
session_start();

//$_SESSION['user_id'] = 'JohnDoe mcs56yyyy655';
//$_SESSION['email'] = 'john.doe@example.com';


// Check if the user is logged in and set session variables
if (isset($_SESSION['user_id'])) {
    $data = array(
        'user_id' => $_SESSION['user_id'],
        'email' => $_SESSION['email']
        // Add more session variables as needed
    );

    // Return the session data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    // Return an empty object if the user is not logged in
    header('Content-Type: application/json');
    echo json_encode((object) array());
}
?>
