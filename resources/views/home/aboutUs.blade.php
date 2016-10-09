@extends('layouts/default')
@section('title', 'About US')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                        <h2>FabFive Investors<span></span></h2>
                        <h1>About US</h1>
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
        <div class="col-md-12 clearfix fh5co-header">
            <h1 class="h1 fh5co-heading fh5co-no-margin-bottom">
                Fab Five Investors
            </h1>
            <h4 class="h5 fh5co-heading-sub">
                Serves as a place to share ideas about different types of investments. Its financial content includes a variety of timely articles and videos with tips and tools for personal finance and retirement planning. We offer good and best financial products depending upon their financial needs.
            </h4>
        </div>
        <div class="col-md-12 clearfix fh5co-header">
            <h1 class="h1 fh5co-heading fh5co-no-margin-bottom">
                Smart Investments Makes Life Simple
            </h1>
            <h4 class="h5 fh5co-heading-sub">
                Our Moto is to give awareness to all kinds of peoples about different types of financial investments and the importance of  investments to make their healthy financial life and their needs. 
            </h4>
        </div>
        
        <div class="fh5co-spacer fh5co-spacer-md"></div>
         <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="item">
                        <!-- <div class="container"> -->
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12 col-xxs-12 fh5co-item-slide-text fh5co-side-section fh5co-nav-links text-center">
                                    <h2>Our Investment Schemes <span class="fh5co-border"></span></h2>
                                    <ul>
                                        <li><a href="javascript:void(0)"><strong>Equity</strong></a></li>
                                        <li><a href="javascript:void(0)"><strong>Commodity</strong></a></li>
                                        <li><a href="javascript:void(0)"><strong>Mutual Fund</strong></a></li>
                                        <li><a href="javascript:void(0)"><strong>Bonds</strong></a></li>
                                        <li><a href="javascript:void(0)"><strong>Wealth Insurance</strong></a></li>
                                    </ul>
                                </div>
                            </div>
                        <!-- </div> -->
                    </div>
                    <!-- END .item -->
                </div>
            </div>
        </div>

    </div>
</div>
@stop
@section('foot')
<script type="text/javascript">
    $(document).ready(function(){
        $('#aboutUsMenu').addClass('active');
    });
</script>
@stop