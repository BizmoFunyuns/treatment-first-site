<?php 
$errors = '';
$myemail = 'apresto@mac.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['emailAddress']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['emailAddress'];
$phoneNumber = $_POST['phoneNumber'];
//$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

echo $myemail;

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact Us Submission From drugandalcoholaddictionservices.com: $firstName $lastName";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Phone Number: $phoneNumber"; 
	
//    $headers = array("From: $to", "Reply-To: $email_address");
//    $headers = implode("\r\n", $headers);
//	$headers = "From: $myemail"; 
	$headers = "Reply-To: $email_address";
    
    echo $to;
    echo $email_subject;
    echo $email_body;
    echo $headers;
	
	$mail_response = mail($to,$email_subject,$email_body,$headers);
    
    echo $mail_response;
	//redirect to the 'thank you' page
	//header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>