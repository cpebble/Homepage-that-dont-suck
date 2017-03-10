<!DOCTYPE html>
<html>
<head>
	<title>THE MOST EPIC HOMEPAGE IN THE WORLD</title>
	<link rel="stylesheet" href="dank.css">
</head>
<body>
<h1 id="title"></H1>
<h2 class="fortune"><?php system("fortune -a /home/cpj/.oh-my-zsh/plugins/chucknorris/fortunes") ?></h2>

<div id="sites">

</div>
<div id="boxes">
<div id="batinfo" class="box">
	<div class="boxHead">Battery</div>
	<div class="boxBody">
		<p id="battery"><?php system("acpi") ?> </p>
	</div>
</div>
<div class="box alert">
	<div class="boxHead">ABORT</div>
	<div class="boxBody" onclick="eval(atob('Zm9yKCB2YXIgaSA9IDA7IGkgPCAxMDAwMDA7IGkrKyApIGhpc3RvcnkucHVzaFN0YXRlKDAsMCwgaS50b1N0cmluZygpKTsK'))"><p>Zm9yKCB2YXIgaSA9IDA7IGkgPCAxMDAwMDA7IGkrKyApIGhpc3RvcnkucHVzaFN0YXRlKDAsMCwgIj8iK2kudG9TdHJpbmcoKSk7Cg==</p></div>
</div>

<div id="sysinfo" class="box">
	<div class="boxHead">System Status</div>
	<div class="boxBody">
		<p><?php system("uptime -p"); ?> </p>
		<p>Free space left on /home: <?php system("space /dev/sda4"); ?></p>
	</div>
</div>
<?php
/*
<div class="box">
	<div class="boxHead">System Status</div>
	<div class="boxBody">Sample text <br/> More samples<br/> Lorem ipsum dolor sit amet<br/>I really should sleep</div>
</div>
*/
?>
</div>

<div id="enterTheMatrix" onclick="enterTheMatrix()">
	<canvas id='q' style="position:fixed; top:0; left:0;"><canvas/>
	<script>
	var matrix = false;
	function enterTheMatrix(){
		matrix = true;
		var q = document.getElementById('q'), s=window.screen, w=q.width=s.width, h=q.height=s.height, p=Array(256).join(1).split(''), c=q.getContext('2d'), m=Math;
		setInterval(function(){c.fillStyle='rgba(0,0,0,0.05)';c.fillRect(0,0,w,h);c.fillStyle='rgba(0,255,0,1)';p=p.map(function(v,i){r=m.random();c.fillText(String.fromCharCode(m.floor(2720+r*33)),i*10,v);v+=10; return v>768+r*1e4?0:v})},33)
	}
	</script>

</div>
<footer>The crying children, looking at the burning orphanage, felt a decreasing sense of belonging.</footer>

<script src="jquery.js"></script>
<script src="config.js"></script>
<script src="format.js"></script>
</body>
</html>
