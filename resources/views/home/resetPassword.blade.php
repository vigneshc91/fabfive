@extends('layouts/default')
@section('title', 'Reset Password')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                            <h2>FabFive Investors<span></span></h2>
                            @if(!$status)
                                <h1>{{ $message }}</h1>
                            @else
                                <h1>Reset Password</h1>
                            @endif
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
            <div class="col-md-4 col-md-offset-4 text-center fh5co-lead-wrap">
                @if(!$status)
                    <h2 class="fh5co-serif fh5co-lead">Team FabFive</h2>
                @else
                    <h2 class="fh5co-serif">Enter your new password</h2>
                    <form method="post" id="resetPassword">
                        <p class="text-success text-center"></p>
                        <p class="text-danger text-center"></p>
                        <div class="form-group">
                            <input type="hidden" name="reset_token" id="resetToken" value="{{ $token }}" />
                            <label for="password" class="sr-only">Password</label>
                            <input type="text" class="form-control input-lg" name="password" id="password" placeholder="Password" required />
                        </div>
                        <input type="submit" class="btn btn-primary btn-block" value="Reset" />
                    </form>	
                @endif
            </div>
        </div>
    </div>
   
@stop
@section('foot')
<script type="text/javascript">
    $(document).ready(function(){
        $('#resetPassword').on('submit', function(e){
            e.preventDefault();

            var url = '/user/resetPassword';
            if(location.host == "localhost"){
                url = '/fabfive/user/resetPassword';
            }
            
            $.ajax({
                url: url,
                method: 'post',
                dataType: 'json',
                data: {reset_token: $('#resetToken').val(), password: $('#password').val()},
                success: function(response){
                    $('#resetPassword').trigger('reset');
                    if(response.status){
                        $('#resetPassword').find('.text-success').html(response.result);
                        setTimeout(function(){
                            $('#resetPassword').find('.text-success').html('');
                        }, 3000);
                    } else {
                        $('#resetPassword').find('.text-danger').html(response.result);
                        setTimeout(function(){
                            $('#resetPassword').find('.text-danger').html('');
                        }, 3000);
                    }
                } 
            });
        });
    });
</script>
@stop