<?php
session_start();
ob_start();
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
		#takimbilgileri{
			border: 1px #aaa solid;
		}
		#logo{
	float: left;
}
	</style>
</head>
<body>
<div id="logo"><img src="resimler/ctf2.png"></div>
<div id="wrapper">
	<div id="footer" style="float: left;"><img width=800px src="resimler/banner.jpg"></div>
	<div id="takimbilgileri">
		
	<?php
	echo '<center><a style=" font-size:25px;color:white;background-color:black;" href="index.php">Anasayfa İçin Tıklayınız.</a></center><br>'; 
	echo '<center><h3 style="color:green; font-family:comic sans ms">Hoşgeldiniz '.strtoupper($_SESSION["takimadi"]).'</h3></center>'; 
		echo '<center><b style="color:green; font-family:comic sans ms">****.....TAKIM PUANI <b style="color:red; font-family:comic sans ms"> '.$_SESSION["takimpuan"].'</b>.....****</b></center>'; //Takım bilgileri burada unutma...
	?>
	</div>
	<div id="article" >
	
		<fieldset>
			<legend>CTF SORULARI</legend>
			<table>
		<?php
			
		if($_SESSION["soru1"]==0) //1. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru1.php" >Soru 1</a></td><td width="200px">100 Puan</td><td>Araştırma</td><td rowspan="10"><img src="resimler/images.jpg"></td></tr>';
			}
			else{ echo "1. soruyu çözdünüz.<br>";}


			if($_SESSION["soru2"]==0) //2. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru2.php" >Soru 2</a></td><td width="200px">100 Puan</td><td>Web</td></tr>';
			}
			else{ echo "2. soruyu çözdünüz.<br>";}
			if($_SESSION["soru3"]==0) //3. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru3.php" >Soru 3</a></td><td width="200px">200 Puan</td><td>Web</td></tr>';
			}
			else{ echo "3. soruyu çözdünüz.<br>";}
			if($_SESSION["soru4"]==0) //4. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru4.php" >Soru 4</a></td><td width="200px">150 Puan</td><td>Crypto</td></tr>';
			}
			else{ echo "4. soruyu çözdünüz.<br>";}
			if($_SESSION["soru5"]==0) //5. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru5.php" >Soru 5</a></td><td width="200px">300 Puan</td><td>Forensic</td></tr>';
			}
			else{ echo "5. soruyu çözdünüz.<br>";}
			if($_SESSION["soru6"]==0) //6. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru6.php" >Soru 6</a></td><td width="200px">200 Puan</td><td>Developer</td></tr>';
			}
			else{ echo "6. soruyu çözdünüz.<br>";}
			if($_SESSION["soru7"]==0) //7. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru7.php" >Soru 7</a></td><td width="200px">300 Puan</td><td>Social</td></tr>';
			}
			else{ echo "7. soruyu çözdünüz.<br>";}
			if($_SESSION["soru8"]==0) //8. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru8.php" >Soru 8</a></td><td width="200px">150 Puan</td><td>Crypto</td></tr>';
			}
			else{ echo "8. soruyu çözdünüz.<br>";}
			if($_SESSION["soru9"]==0) //9. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru9.php" >Soru 9</a></td><td width="200px">150 Puan</td><td>General Culture</td></tr>';
			}
			else{ echo "9. soruyu çözdünüz.<br>";}
			if($_SESSION["soru10"]==0) //9. soru burada
			{
				
				
			echo '<tr><td width="100px"><a href="soru10.php" >Soru 10</a></td><td width="200px">150 Puan</td><td>General Culture</td></tr>';
			}
			else{ echo "10. soruyu çözdünüz.<br>";}
			?>
	
			
			
			
			
			
			
						
			
		</fieldset>
			
	
	</div>
</div>

</body>
</html>