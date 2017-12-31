@extends('layouts/default')
@section('title', 'Contact')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                            <h2>e2isolutions<span></span></h2>
                            <h1>Contact Us Now</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>
@stop
@section('content')
<div class="container">
    <div class="row">
        <div class="fh5co-spacer fh5co-spacer-sm"></div>	
        <div class="col-md-8">
            <form id="contactForm" method="post">
                <p class="text-center text-success"></p>
                <p class="text-center text-danger"></p>
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="name" class="sr-only">Name</label>
                        <input placeholder="Name" id="name" type="text" class="form-control input-lg" required/>
                    </div>	
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="email" class="sr-only">Email</label>
                        <input placeholder="Email" id="email" type="email" class="form-control input-lg" required/>
                    </div>	
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="message" class="sr-only">Message</label>
                        <textarea placeholder="Message" id="message" class="form-control input-lg" rows="3" required></textarea>
                    </div>	
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary btn-lg " value="Send">
                    </div>	
                </div>
            </form>	
        </div>
        <div class="col-md-4 contact-address">
            <h3>We are located at</h3>
            <p>N0.116,</p>
            <p>S S Koil Street,</p>
            <p>Mangadu,</p>
            <p>Chennai-112</p><br/>
            <p>
                <a href="javascript:void(0)">fabfiveinvestors@yahoo.com</a>
            </p>
        </div>
        <div class="fh5co-spacer fh5co-spacer-md"></div>	
    </div>
</div>
@stop
@section('foot')
<script type="text/javascript">
    $(document).ready(function(){
        $('#contactMenu').addClass('active');
        $('#contactForm').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                url: 'home/contact',
                method: 'post',
                dataType: 'json',
                data: {name: $('#name').val(), email: $('#email').val(), message: $('#message').val()},
                success: function(response){
                    if(response.status){
                        $('#contactForm').trigger('reset');
                        $('#contactForm').find('.text-success').html(response.result);
                        setTimeout(function(){
                            $('#contactForm').find('.text-success').html('');
                        }, 3000);
                    } else {
                        $('#contactForm').find('.text-danger').html(response.result);
                        setTimeout(function(){
                            $('#contactForm').find('.text-danger').html('');
                        }, 3000);
                    }
                } 
            });
        });
    });
</script>
@stop