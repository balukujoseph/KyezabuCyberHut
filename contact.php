<?php
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    //Set your email address
    $to = "kyezabucyberhut@gmail.com";
    $subject = "New inquiry fro Kyezabu CyberHut Website";

    //Collect and clean form data
    $name = strip_tags(trim($_POST["full_name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $service = $_POST["service"];
    $message = trim($_POST["message"]);

    //Construct the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Interested Service: $service\n\n";
    $email_content .= "Message:\n$message\n";

    //Set email headers
    $headers = "From: $name <$email>";

    //Send the email
    if (mail($to, $subject, $email_content, $headers)){
        //Success! Redirect to a thank you messageor back home
        echo "<script>alert('Message sent successfully!'); window.location.href='why-us.html';</script>";
    } else {
        //Error!
        echo "<script>alert('Oops! Something went wrong, please try again.')window.history.back();</script>";

    } 
}else{
        //If someone tries to access contact.php directly, send them back
        header("Location: why-us.html");
}
?>