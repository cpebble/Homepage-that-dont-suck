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
<div id="sysinfo" class="box">
	<div class="boxHead">System Status</div>
	<div class="boxBody">
		<p><?php system("uptime -p"); ?> </p>
		<p>Free space left on /home: <?php system("space /dev/sda4"); ?></p>
	</div>
</div>
<div class="box">
	<div class="boxHead">System Status</div>
	<div class="boxBody">Sample text <br/> More samples<br/> Lorem ipsum dolor sit amet<br/>I really should sleep</div>
</div>
<div class="box">
	<div class="boxHead">System Status</div>
	<div class="boxBody">Sample text <br/> More samples<br/> Lorem ipsum dolor sit amet<br/>I really should sleep</div>
</div>
</div>

<script src="jquery.js"></script>
<script src="config.js"></script>
<script src="format.js"></script>
</body>
</html>
