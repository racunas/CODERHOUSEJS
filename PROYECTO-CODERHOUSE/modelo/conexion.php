<?php

	class ConexionTienda extends mysqli {

		public function get_connection(){ 
			$user = "root";
			$pass = "root";
			$host = "localhost";
			$db = "ariamx";
			$connection = new PDO("mysql:host={$host}; dbname={$db};", $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
			return ($connection);
		}
	}

?>
