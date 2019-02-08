<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
header("Content-Type: application/json; charset=utf-8");

if (isset($_POST["basket"])) $basket=$_POST["basket"];
else{ 
	echo '{"error":"busket par is empty", "cod":1}';
	return;
}
if (file_exists("ud/".$basket.".json")){
	$s= file_get_contents("ud/".$basket.".json");
	echo $s;
}else{
	echo "[]";
}


?>