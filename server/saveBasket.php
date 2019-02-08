<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
header("Content-Type: application/json; charset=utf-8");

if (isset($_POST["basket"])) $basket=$_POST["basket"];
else{ 
	echo '{"error":"basketId is empty", "cod":1}';
	return;
}
if (isset($_POST["data"])) $data=$_POST["data"];
else{ 
	echo '{"error":"data is empty", "cod":2}';
	return;
}
file_put_contents("ud/".$basket.".json", $data)
?>
{}