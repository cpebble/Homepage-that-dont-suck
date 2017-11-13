<?php
if (!isset($_POST['file'])) {
    echo "please post 'file' request to change background.";

}
else{
    $col = $_POST['file']; # cause $_POST[] makes me want to kill myself and php;
    $src = __DIR__."/assets/".$col.".png"; # Only deal with png backgrounds
    $back= __DIR__."/assets/back.png";

    if(copy($src, $back)){
        echo "Background changed";
    }
    else{
        echo "Something went wrong. Please contact god@thebigchair.heaven";
    }
}
?>
