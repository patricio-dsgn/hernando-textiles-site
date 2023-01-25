<?php

    $name = $_POST['ajax_var_name'];
    $email = $_POST['ajax_var_email'];
    $message = $_POST['ajax_var_message'];

    $to = "patricio.ngg@gmail.com";
    $from = $email;

    $subject = "Formulario Sitio Web: ". $name;

    $msg = '
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title></title>
    </head>
    <body>
        <div id="email-wrap" style="background: #43cea2; background: -webkit-linear-gradient(-45deg, #43cea2, #185a9d); background: linear-gradient(-45deg, #43cea2, #185a9d); color: #333; line-height:20px; width: auto; padding: 20px; border-radius: 10px; font-family: sans-serif;">
            <p style="display: block; margin-bottom: 30px; color:#fff"; max-width: 70ch;>Mensaje de formulario web:</p>
            <p style="display: block; margin-bottom: 5px; color:#fff;">'.$message.'</p>
            <p style="display: block; margin:20px 0 5px 0; font-size:16px;font-weight: bold; color: #fff; padding-top:0px">'.$name.'</p>            
            <a style="display: block; margin-bottom: 5px; font-size:16px;text-decoration: none; color: #fff;" href="mailto:'.$email.'">'.$email.'</a>
        </div>
    </body>
</html>';


    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <".$from. ">" ;
    mail($to,$subject,$msg,$headers);

    // imprimir respuesta html en backend
echo'
    <p style="font-size:16px; color: #50C878 ">¡Correo enviado!</p>
    <p style="font-size:16px; color: #50C878 ">Gracias '.$name .',</p>
    <p style="font-size:16px; color: #50C878 ">nos pondrémos en contacto</p>
';

    // echo '
    // <div class="title_description">datos enviados por formulario</div>
    // <div class="email">'.$msg.'</div>'
    // ;

?>