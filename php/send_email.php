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
    $websiteUrlAudit = @trim(stripslashes($_POST['websiteUrlAudit'])); 
    $phoneNumber = @trim(stripslashes($_POST['phoneNumber']));
    
    $email_subject = 'Website Performance Audit'; 
    $email_to = 'info.idolwave@gmail.com'; 

    $body = 'website: ' . $websiteUrlAudit . "\n\n" . 'phone: ' . $phoneNumber;

    $success = @mail($email_to, $email_subject, $body);
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <script>alert("Thank you for contacting us. We will contact you as soon as possible.");</script>
    <meta HTTP-EQUIV="REFRESH" content="0; url=../website-auditor.html">        
</head>
</html>