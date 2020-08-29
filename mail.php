<?php
$name = $_POST['name'];
$email = $_POST['email'];
$website = $_POST['website'];
$priority = $_POST['priority'];
$type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" From: $name \n Website: $website \n Priority: $priority \n Type: $type \n Message: $message";
$recipient = "skincoinn@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='contact-us.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
