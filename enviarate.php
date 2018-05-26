<?php

 $destino= "kattycat.17@gmail.com";
 $info= $_POST["info"];
 $nombredos= $_POST["nombredos"];
 $emaildos= $_POST["emaildos"];
 $telefonodos= $_POST["telefonodos"];
 $mensajedos= $_POST["mensajedos"];

 $contenido = "Nombre: " . $nombredos . "\ntipodemensaje: " . $info .  "\nEmail: " . $emaildos . "\nTelefono: " . $telefonodos . "\nmensaje: " . $mensajedos;

 mail($destino,"Contacto", utf8_decode($contenido));
 header("location:contacto.html");
?>