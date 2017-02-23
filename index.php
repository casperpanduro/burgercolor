<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Burgercolor</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

</head>
<body>
<style>
	section {
		height: 100vh;
	}
	.white {
		background: #fff;
	}
	.black {
		background: #000;
	}
	.red {
		background: red;
	}
	.blue {
		background: blue;
	}
	.burger {
		width: 50px;
		height: 50px;
		position: fixed;
		top: 50px;
		right: 50px;
		background: #000;
	}

	.bg-detect-dark .burger {
		background: #fff;
	}
</style>
<div class="burger">
	
</div>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="blue">
	
</section>
<section class="red">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="blue">
	
</section>
<section class="red">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="blue">
	
</section>
<section class="red">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
<section class="blue">
	
</section>
<section class="red">
	
</section>
<section class="white">
	
</section>
<section class="black">
	
</section>
	<script src="burgercolor.js"></script>
	<script>
		$(document).ready(function(){
			$('section').burgercolor({
				offset: 75
			});
		});
	</script>
</body>
</html>