    <!-- 
	///////////////////////////////////////////////////////////////
    final author start
	///////////////////////////////////////////////////////////////
	-->
    <meta author="Final Author" content="Mohammad Aminul Islam"/>
    <!-- 
	///////////////////////////////////////////////////////////////
    final author end
	///////////////////////////////////////////////////////////////
	-->




<?php
    $contact_name = @trim(stripslashes($_POST['contact_name'])); 
    $contact_email = @trim(stripslashes($_POST['contact_email']));
    $contact_phone = @trim(stripslashes($_POST['contact_phone']));
    $contact_message = @trim(stripslashes($_POST['contact_message']));

    $email_subject = 'idol wave contact form'; 
    $email_to = 'info.idolwave@gmail.com'; 

    $body = 'name: ' . $contact_name . "\n\n" . 'email: ' . $contact_email . "\n\n" . 'phone: ' . $contact_phone . "\n\n" . 'message: ' . $contact_message;

    $success = @mail($email_to, $email_subject, $body);
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <script>alert("Thank you for contacting us. We will contact you as soon as possible.");</script>
    <meta HTTP-EQUIV="REFRESH" content="0; url=../contact.html">        
</head>
</html>









