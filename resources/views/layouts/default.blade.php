<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>@yield('title') - FabFive</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="FabFive Investors" />
  	<meta name="keywords" content="FabFive Investors, FabFive, Investments" />
  	<meta name="author" content="FabFive" />
  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />
  	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  	<link rel="shortcut icon" href="{{ asset('/').('public/images/favicon.ico') }}">
  	<!-- Google Webfont -->
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400|Crimson+Text' rel='stylesheet' type='text/css'>
	<!-- Themify Icons -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/themify-icons.css') }}">
	<!-- Bootstrap -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/bootstrap.css') }}">
	<!-- Owl Carousel -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/owl.carousel.min.css') }}">
	<link rel="stylesheet" href="{{ asset('/').('public/css/owl.theme.default.min.css') }}">
	<!-- Magnific Popup -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/magnific-popup.css') }}">
	<!-- Superfish -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/superfish.css') }}">
	<!-- Easy Responsive Tabs -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/easy-responsive-tabs.css') }}">
	<!-- Theme Style -->
	<link rel="stylesheet" href="{{ asset('/').('public/css/style.css') }}">
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="{{ asset('/').('public/js/modernizr-2.6.2.min.js') }}"></script>
	<script src="{{ asset('/').('public/js/respond.min.js') }}"></script>
	<![endif]-->
	</head>
	<body>
	<!-- START #fh5co-header -->
			<header id="fh5co-header-section" role="header" class="" >
				<div class="container">
					<!-- START #fh5co-logo -->
					<h1 id="fh5co-logo" class="pull-left"><a href="{{ url('/') }}">FabFive</a></h1>
					<!-- START #fh5co-menu-wrap -->
					<nav id="fh5co-menu-wrap" role="navigation">
						<ul class="sf-menu" id="fh5co-primary-menu">
							<li id="homeMenu">
								<a href="{{ url('/') }}">Home</a>
							</li>
							<li>
								<a href="#" class="fh5co-sub-ddown">Dropdown</a>
								 <ul class="fh5co-sub-menu">
								 	<li><a href="left-sidebar.html">Left Sidebar</a></li>
								 	<li><a href="right-sidebar.html">Right Sidebar</a></li>
									<li><a href="#">HTML5</a></li>
									<li>
										<a href="#" class="fh5co-sub-ddown">JavaScript</a>
										<ul class="fh5co-sub-menu">
											<li><a href="#">jQuery</a></li>
											<li><a href="#">Zipto</a></li>
											<li><a href="#">Node.js</a></li>
											<li><a href="#">AngularJS</a></li>
										</ul>
									</li>
									<li><a href="#">CSS3</a></li> 
								</ul>
							</li>
							<li><a href="elements.html">Elements</a></li>
							<li id="contactMenu"><a href="{{ URL::route('contact') }}">Contact</a></li>
						</ul>
					</nav>
				</div>
			</header>
			@yield('top')
			<div id="fh5co-main">
				@yield('content')
				<footer id="fh5co-footer">
					<div class="container">
						<ul class="fh5co-social-icons">
							<li><a href="#"><i class="ti-twitter-alt"></i></a></li>
							<li><a href="#"><i class="ti-facebook"></i></a></li>
							<li><a href="#"><i class="ti-github"></i></a></li>
							<li><a href="#"><i class="ti-linkedin"></i></a></li>
						</ul>
						<p class="text-muted fh5co-no-margin-bottom text-center"><small>&copy; 2016 <a href="#">FabFive</a>. All rights reserved. Crafted with love <em>by</em> <a href="javascript:void(0)">Xtreme Programmers</a></small></p>
					</div>
				</footer>
			</div>
		<!-- jQuery -->
		<script src="{{ asset('/').('public/js/jquery-1.10.2.min.js') }}"></script>
		<!-- jQuery Easing -->
		<script src="{{ asset('/').('public/js/jquery.easing.1.3.js') }}"></script>
		<!-- Bootstrap -->
		<script src="{{ asset('/').('public/js/bootstrap.js') }}"></script>
		<!-- Owl carousel -->
		<script src="{{ asset('/').('public/js/owl.carousel.min.js') }}"></script>
		<!-- Magnific Popup -->
		<script src="{{ asset('/').('public/js/jquery.magnific-popup.min.js') }}"></script>
		<!-- Superfish -->
		<script src="{{ asset('/').('public/js/hoverIntent.js') }}"></script>
		<script src="{{ asset('/').('public/js/superfish.js') }}"></script>
		<!-- Easy Responsive Tabs -->
		<script src="{{ asset('/').('public/js/easyResponsiveTabs.js') }}"></script>
		<!-- FastClick for Mobile/Tablets -->
		<script src="{{ asset('/').('public/js/fastclick.js') }}"></script>
		<!-- Main JS -->
		<script src="{{ asset('/').('public/js/main.js') }}"></script>
		@yield('foot')
	</body>
</html>