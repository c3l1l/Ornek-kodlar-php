

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
			$yanit=@$_POST["cevap_7"];
			if(empty($yanit))
			{
			echo "Boş değer gonderdiniz.";
			}
			$yanit=strtolower($yanit);
			
			if($yanit== "flag_{flag{h4ck3rs_4r3_sm4rt}}")
			{
				
			echo '<center><h3 style="color: green"> Tebrikler bir sonraki soruya geçebilirsiniz.</h3></center>';
			$_SESSION["soru7"]=1;
			$_SESSION["takimpuan"]=$_SESSION["takimpuan"]+300;
			}
			else {
			echo '<center >'.$yanit.'<h3 style="color:red">Cevabınız yanlış.Tekrar deneyiniz.</h3></center>';
			}
}

?>
<table align="center" id="satir1">

<tr><td align="center"><img src="resimler/hackers.jpg" width="500px" height="300px"></td></tr>
<tr><td>Merhaba hacker.</td></tr>
<tr><td>
<a href="https://t.me/Geveze_bot">Geveze_bot</a>  </td></tr>
<td><td><form action="soru7.php" method="POST" name="form1">
<tr><td>
	Cevabı giriniz.<input type="textbox" name="cevap_7" />
	<input type="submit" name="gonder" value="Gonder">
</td></tr>
</form>
</td></tr>
</table>
	</div>
</div>

</body>
</html>






