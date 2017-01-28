@extends('layouts/default')
@section('title', 'Unsubscribe')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                            <h2>FabFive Investors<span></span></h2>
                            <h1>{{ $message }}</h1>
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
            <div class="col-md-8 col-md-offset-2 text-center fh5co-lead-wrap">
                <h2 class="fh5co-serif fh5co-lead">Team FabFive</h2>
            </div>
        </div>
    </div>
   
@stop
