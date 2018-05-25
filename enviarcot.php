<?php

 $destino= "kattycat.17@gmail.com";
 $nombreuno= $_POST["nombreuno"];
 $emailuno= $_POST["emailuno"];
 $telefonouno= $_POST["telefonouno"];
 $selectuno= $_POST["selectuno"];
 $mensajeuno= $_POST["mensajeuno"];
 $cantidad= $_POST["cantidad"];
 $tipo= $_POST["tipo"];
 $adjunto= $_POST["adjunto"];

//variables para los datos del archivo 
        $nombrearchivo = $_FILES['adjunto']['name'];
        $archivo = $_FILES['adjunto']['tmp_name'];
        // Leemos el archivo a adjuntar
        $archivo = file_get_contents($archivo);
        $archivo = chunk_split(base64_encode($archivo));





 $contenido = "Nombre: " . $nombreuno . "\nEmail: " . $emailuno . "\nTelefono: " . $telefonouno . "\nservicio: " . $selectuno . "\nmensaje: " . $mensajeuno . "\ncantidad: " . $cantidad . "\ntipoimpresion: " . $tipo . "\nadjunto: " . $adjunto "\nfile: " . $archivo;
 /*mail($destino,"Contacto", $contenido);*/




 mail($destino,"Contacto", utf8_decode($contenido));
 header("location:contacto.html");

?>