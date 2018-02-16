

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
		input[type=text] {
    width: 300px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
		#buttonstil {
    background-color: #DC143C; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
	</style>
</head>
<body>

<div id="wrapper">
	<div id="footer"><img id="gizlebeni1" width=800px src="resimler/banner.jpg"></div>
	<div id="article">
	<center><a href="sorular.php" style="text-decoration: none; color:yellow ;background-color:black;">Sorular sayfasına gitmek için tıklayınız.</a></center>
	<?php
	if($_POST)
	{
			$yanit=@$_POST["cevap_10"];
			if(empty($yanit))
			{
			echo "Boş değer gonderdiniz.";
			}
			$yanit=strtolower($yanit);
			
			if($yanit=="flag_{perfect}")
			{
				
			echo '<center><h3 style="color: green"> Tebrikler bir sonraki soruya geçebilirsiniz.</h3></center>';
			$_SESSION["soru10"]=1;
			$_SESSION["takimpuan"]=$_SESSION["takimpuan"]+150;
			}
			else {
			echo '<center >'.$yanit.'<h3 style="color:red">Cevabınız yanlış.Tekrar deneyiniz.</h3></center>';
			}
}

?>
<table align="center" id="satir1">

<tr><td align="center"></td></tr>
<tr><td>Merhaba hacker.</td></tr>
<tr><td>
<audio controls>
  <source src="resimler/sarki.ogg" type="audio/ogg">
  <source src="resimler/sarki.mp3" type="audio/mpeg">
Tarayıcınız audio elementini desteklemiyor.
</audio> </td></tr>
<td><td><form action="soru10.php" method="POST" name="form1">
<tr><td>
	Cevabı giriniz.<input type="textbox" name="cevap_10" />
	<input type="submit" name="gonder" value="Gonder">
</td></tr>
</form>
</td></tr>
</table>
	</div>
</div>

</body>
</html>






