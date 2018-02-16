<?php
session_start();
ob_start();



	$takimadi=@$_POST["takimadi"];

	if(empty($takimadi))
	{
		echo '<script type="text/javascript">alert("Takım adı boş geçilemez.");</script>';
	 echo "Anasayfaya Yönlendiriliyorsunuz.";
		header("Refresh:3; url=index.php");
	}
	else{
	
	

	$_SESSION["takimadi"]=$takimadi;
	$_SESSION["takimpuan"]=0;
	$_SESSION["soru1"]=0;
	$_SESSION["soru2"]=0;
	$_SESSION["soru3"]=0;
	$_SESSION["soru4"]=0;
	$_SESSION["soru5"]=0;
	$_SESSION["soru6"]=0;
	$_SESSION["soru7"]=0;
	$_SESSION["soru8"]=0;
	$_SESSION["soru9"]=0;
	$_SESSION["soru10"]=0;
	
	
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title>C3l1l CTF</title>
	<meta charset="utf-8">
	<style type="text/css">
		#wrapper{
			margin: auto;
			width:800px;
		}
		#footer{
			width: 800px;
			height: 300px;

		}
		body{ color:green; 
		font-size: 20px;
		}
	</style>
</head>
<body bgcolor="black">
<div id="wrapper">
	<div id="footer"><img width=800px src="resimler/banner.jpg"></div>
	<div id="article">

			<?php 

		if(isset($_SESSION["takimadi"]))
		{
			echo '<h3 style="color:green;">Hoşgeldiniz '.$_SESSION["takimadi"].'</h3>';
			echo "Takım Puanı=".$_SESSION["takimpuan"]."<br>";
			/*include ("sorular.php");*/
			echo '<a href="index.php">Anasayfa İçin Tıklayınız.</a><br>';
	        echo '<a href="sorular.php">Soruları Görmek İçin Tıklayınız.</a>';
	        echo '<center><img width=300px height=300px src="resimler/fsociety.jpg"/></center>';

		}
		else {
			
		}
	?>
	</div>
</div>

</body>
</html>