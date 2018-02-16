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
    background-color: #f90; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

}
body{ color:green; 
		font-size: 20px;
		}
	</style>
	<script type="text/javascript">
		function uyarı(){ confirm("Çıkmak istediğinize emin misiniz.");}
	</script>

</head>
<body bgcolor="black">
<script type="text/javascript">
	alert("Dikkat !! Bu uygulama geliştirilirken Veritabanı kullanılmamıştır. Yapılan değişiklikler session kullanılarak değiştirilmiştir.	Session bilindiği üzere tarayıcı açık kaldığı sürece aktif olmaktadır.   Uygulamaya geçmeden önce bunu göz önünde bulundurmanız çok önemlidir.	 Anasayfada 10 adet soru bulunmaktadır.Her bir sorunun değeri belirtilmiştir.  Bir soru doğru çözüldüğünde kullanıcı toplam puanı artmaktadır.  Ve bu puanlar skor tablosunda tutulmaktadır.  Bu CTF'te amaç hacking yada güvenlik bilgisi dışında farklı düşünebilme yeteneğinizi geliştirmektir.  Tüm takımlara başarılar dileriz.flagi bulanlar flag_{kelime1_kelime2} şeklinde giriniz.****Celil,Okay,Nuriye****");
</script>

<div id="wrapper">
	<div id="footer"><img width=800px src="resimler/banner.jpg"></div>
	<div id="article">
	<?php 

		if(isset($_SESSION["takimadi"]))
		{
			echo '<h3 style="color:green;">Hoşgeldiniz '.$_SESSION["takimadi"].'</h3>';
			echo '<a href="index.php">Anasayfa İçin Tıklayınız.</a><br>';
	        echo '<a href="sorular.php">Sorular için tıkla</a><br>';
	        echo '<a href="cikis.php" onclick="uyarı();">Çıkış için tıkla</a>';
	        echo '<center><img width=300px height=300px src="resimler/fsociety.jpg"/></center>';
			
		}
		else {
			echo '<fieldset>
			<legend>CTF\'e Giriş Yap !!!</legend><br><br>
			<form action="giris-kontrol.php" method="POST" name="form1">
				Takım Adı:<input type="text" name="takimadi">
				
				<input id="buttonstil" type="submit" name="" value="Giriş">
			</form><br><br>
		</fieldset>';
		}
	?>
		
	</div>
</div>

</body>
</html>