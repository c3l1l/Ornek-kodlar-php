<?php try{
	
	$veritabani=new PDO ("mysql:host=localhost;dbname=rbd_db;charset=utf8","root","");
	$veritabani->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

	
}catch(PDOException $e){
	print $e ->getMessage();
}
?>
