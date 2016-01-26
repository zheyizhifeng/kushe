<?php 
	require_once "MyDB_class.php";
	header("Content-Type:text/html;charset=utf-8");
	$myDb = new MyDB();
?>

<!DOCTYPE html>
<html>
<head lang="zh-cn">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>动漫-酷设</title>
	<!--<link rel="stylesheet" href="bootstrap.min.css">-->
	<link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/home_test.css">
	<link rel="stylesheet" href="css/format.css">
	<script src="jquery-2.1.1.min.js"></script>
	<script src="scripts/masonry.pkgd.min.js"></script>
	<!--<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>-->
</head>
<body>
	<div class="container wrap-content">
		<div class="row dir">
			<div class="col-md-3 first">
				<h2>动漫</h2>
			</div>
			<div class="col-md-3 sencond">
				<p>海贼王</p>
			</div>
			<div class="col-md-3 sencond">
				<p>海贼王</p>
			</div>
			<div class="col-md-3 sencond">
				<p>海贼王</p>
			</div>
		</div>
		<div class="curDir">
			<p>
				分类&nbsp;&gt;&nbsp;
				<a href="" class="highDir">动漫</a>
			</p>
		</div>
		<div class="wrap-show">
			<div class="show">
				<div class="show-img">
					<a href="">
						<img src="images/5.jpg" alt="">
					</a>
				</div>
				<div class="desc">
					<p>麦克华斯基</p>
				</div>
			</div>
			<div class="show">
				<div class="show-img">
					<a href="">
						<img src="images/5.jpg" alt="">
					</a>
				</div>
				<div class="desc">
					<p>麦克华斯基</p>
				</div>
			</div>
			<div class="show">
				<div class="show-img">
					<a href="">
						<img src="images/5.jpg" alt="">
					</a>
				</div>
				<div class="desc">
					<p>麦克华斯基</p>
				</div>
			</div>
			<div class="show">
				<div class="show-img">
					<a href="">
						<img src="images/5.jpg" alt="">
					</a>
				</div>
				<div class="desc">
					<p>麦克华斯基</p>
				</div>
			</div>
			<div class="show">
				<div class="show-img">
					<a href="">
						<img src="images/5.jpg" alt="">
					</a>
				</div>
				<div class="desc">
					<p>麦克华斯基</p>
				</div>
			</div>
			<div class="show">
				<div class="show-img">
					<a href="">
						<img src="images/5.jpg" alt="">
					</a>
				</div>
				<div class="desc">
					<p>麦克华斯基</p>
				</div>
			</div>
		</div>
		<div class="loading"></div>
		<div class="page">
			<ul class="pagination pagination-lg">
				<li>
					<a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li class="active">
					<a href="#">1</a>
				</li>
				<li>
					<a href="#">2</a>
				</li>
				<li>
					<a href="#">3</a>
				</li>
				<li>
					<a href="#">4</a>
				</li>
				<li>
					<a href="#">5</a>
				</li>
				<li>
					<a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<script src="http://localhost/kusheCross/scripts/test.js"></script>
	<script src="http://localhost/kusheCross/scripts/waterfallFlow.js"></script>
</body>
</html>
