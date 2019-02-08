<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
header("Content-Type: application/json; charset=utf-8");

?>

[
{name:"product 1", price:1.4, src:"http://localhost/resumeMag/img/1.jpg"},
{name:"product 2", price:2.5, src:"http://localhost/resumeMag/img/2.jpg"},
{name:"product 3", price:3.7, src:"http://localhost/resumeMag/img/3.jpg"},
{name:"product 4", price:4.3, src:"http://localhost/resumeMag/img/4.jpg"},
]