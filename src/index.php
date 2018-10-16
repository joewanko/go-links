<?php
$links = parse_ini_file('links.ini');

function unknown($to_print) {
    header('HTTP/1.0 404 Not Found');
    print_r($to_print);
    echo '<br>Unknown link.';
}

if(isset($_GET['l'])) {
    $pieces_raw = split('/', $_GET['l']);
    $pieces = [];
    foreach ($pieces_raw as $piece) {
        if (strlen($piece) !== 0) {
            array_push($pieces, $piece);
        }
    }
    if(array_key_exists($pieces[0], $links)){
        header('Location: ' . $links[$pieces[0]]);
    } else {
        unknown($pieces);
    }
}
else{
    unknown($_GET['l']);
}

?>
