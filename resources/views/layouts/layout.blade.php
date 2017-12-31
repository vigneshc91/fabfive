<html>
  <head>
    <title>@yield('title') - e2isolutions</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{ asset('/').('public/images/favicon.ico') }}">
    <link rel="stylesheet" href="{{ asset('/').('public/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('/').('public/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('/').('public/css/themify-icons.css') }}">
     <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="{{ asset('/').('node_modules/core-js/client/shim.min.js') }}"></script>
    <script src="{{ asset('/').('node_modules/zone.js/dist/zone.js') }}"></script>
    <script src="{{ asset('/').('node_modules/reflect-metadata/Reflect.js') }}"></script>
    <script src="{{ asset('/').('node_modules/systemjs/dist/system.src.js') }}"></script>
    <!-- 2. Configure SystemJS -->
    <script src="{{ asset('/').('public/script/systemjs.config.js') }}"></script>
    <script src="{{ asset('/').('public/js/ckeditor/ckeditor.js') }}"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
    <base href="/">
  </head>
  <!-- 3. Display the application -->
  <body>
    @yield('top')
    @yield('content')
    <footer id="fh5co-footer">
        <div class="container">
            <ul class="fh5co-social-icons">
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-github"></i></a></li>
                <li><a href="#"><i class="ti-linkedin"></i></a></li>
            </ul>
            <p class="text-muted fh5co-no-margin-bottom text-center"><small>&copy; {{ Date('Y') }} <a href="#">e2isolutions</a>. All rights reserved. Crafted with love <em>by</em> <a href="javascript:void(0)">Xtreme Programmers</a></small></p>
        </div>
    </footer>
    <script src="{{ asset('/').('public/js/jquery-1.10.2.min.js') }}"></script>
    <script src="{{ asset('/').('public/js/bootstrap.js') }}"></script>
    <script src="{{ asset('/').('public/js/Chart.bundle.min.js') }}"></script>
    <!--<script src="{{ asset('/').('dist/e2isolutions.vendor.bundle.js') }}"></script>
    <script src="{{ asset('/').('dist/e2isolutions.main.bundle.js') }}"></script>-->
    @yield('foot')
  </body>
</html>
