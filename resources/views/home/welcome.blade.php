@extends('layouts/default')
@section('title', 'Welcome')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                            <h2>e2isolutions<span></span></h2>
                            <h1>Smart Investments Makes Life Simple!</h1>
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
                <h2 class="fh5co-serif fh5co-lead">&ldquo;How many <a href="javascript:void(0)">millionaires</a> do you know who have become wealthy by investing in savings accounts? I rest my case.&rdquo;</h2>
                <p class="fh5co-testimonial-author"><cite>&mdash; Robert G. Allen</cite></p>
                <div class="fh5co-spacer fh5co-spacer-sm"></div>
                <p><a href="#" class="btn btn-outline btn-lg">Want To Invest With Us</a></p>
            </div>
        </div>
    </div>
    <section id="fh5co-feature">
        <div class="container">
            <!-- FEATURE -->
            <div class="row fh5co-feature-2">
                <h2 class="fh5co-uppercase-heading-sm text-center">Our Investment Schemes</h2>
                <div class="fh5co-spacer fh5co-spacer-md"></div>
                <div class="col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/equity.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Equity</h3>
                    <p class="text-center fh5co-feature-description">The value of an asset less the value of all liabilities on that asset.</p>
                    <p class="text-center"><a href="{{ URL::route('equity') }}" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/commodity.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Commodity</h3>
                    <p class="text-center fh5co-feature-description">A raw material or primary agricultural product that can be bought and sold.</p>
                    <p class="text-center"><a href="{{ URL::route('commodity') }}" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="clearfix visible-sm-block"></div>
                <div class="col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/mutual-fund.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Mutual Fund</h3>
                    <p class="text-center fh5co-feature-description">An investment programme funded by shareholders that trades in diversified holdings.</p>
                    <p class="text-center"><a href="{{ URL::route('mutualFund') }}" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="col-md-offset-2 col-sm-offset-0 col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/Bonds.png') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Debt Market</h3>
                    <p class="text-center fh5co-feature-description">Fixed income securities can be issued by any entity public or private.</p>
                    <p class="text-center"><a href="{{ URL::route('debtMarket') }}" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="col-md-offset-0 col-sm-offset-3 col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/Compass-Wealth-Pic.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Wealth Insurance</h3>
                    <p class="text-center fh5co-feature-description">A store of value, in a liquid form, for a potential financial emergency.</p>
                    <p class="text-center"><a href="{{ URL::route('wealthInsurance') }}" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <!-- <div class="fh5co-spacer fh5co-spacer-md"></div> -->
            </div>
        </div>
    </section>
    <div class="fh5co-spacer fh5co-spacer-lg"></div>
    <section id="fh5co-feature-slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="owl-carousel-fullwidth owl-carousel-2">
                        <div class="item">
                            <!-- <div class="container"> -->
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-1 col-sm-9 col-sm-offset-1">
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-slide-img"> 
                                                <img src="{{ asset('/').('public/images/short-term-investment.jpg') }}" alt="Images" class="img-responsive">
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-slide-text fh5co-side-section fh5co-nav-links">
                                                <h2>Short Term Investment <span class="fh5co-border"></span></h2>
                                                <ul>
                                                    <li><a href="javascript:void(0)"><strong>Higher Risk</strong></a></li>
                                                    <li><a href="javascript:void(0)"><strong>Speculative</strong></a></li>
                                                    <li><a href="javascript:void(0)"><strong>Usually Lump sum Investments</strong></a></li>
                                                    <li><a href="javascript:void(0)"><strong>Impulsive</strong></a></li>
                                                    <li><a href="javascript:void(0)"><strong>No Tax Benefits</strong></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                        <!-- END .item -->
                        <div class="item">
                            <div class="row">
                                <div class="col-md-9 col-md-offset-1 col-sm-9 col-sm-offset-1">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-slide-img"> 
                                            <img src="{{ asset('/').('public/images/long-term-investment.jpg') }}" alt="Images" class="img-responsive">
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-slide-text fh5co-side-section fh5co-nav-links">
                                            <h2>Long Term Investment <span class="fh5co-border"></span></h2>
                                            <ul>
                                                <li><a href="javascript:void(0)"><strong>Less Risk</strong></a></li>
                                                <li><a href="javascript:void(0)"><strong>Small And Steady Returns</strong></a></li>
                                                <li><a href="javascript:void(0)"><strong>Benefits From Averaging</strong></a></li>
                                                <li><a href="javascript:void(0)"><strong>Strategic</strong></a></li>
                                                <li><a href="javascript:void(0)"><strong>Tax Benefits</strong></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END .item -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="fh5co-spacer fh5co-spacer-xlg"></div>
    <section id="fh5co-testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="fh5co-uppercase-heading-sm">What Successfull People Are Saying</h2>
                    <div class="owl-carousel-fullwidth fh5co-light-arrow owl-carousel-2">
                        <div class="item">
                            <blockquote>
                                <p class="fh5co-serif">&ldquo;An investment in knowledge pays the best interest.&rdquo;</p>
                                <p class="fh5co-testimonial-author"><cite>&mdash; Benjamin Franklin</cite></p>
                            </blockquote>
                        </div>
                        <!-- END .item -->
                        <div class="item">
                            <blockquote>
                                <p class="fh5co-serif">&ldquo;I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.&rdquo;</p>
                                <p class="fh5co-testimonial-author"><cite>&mdash; Warren Buffett</cite></p>
                            </blockquote>
                        </div>
                        <!-- END .item -->
                        <div class="item">
                            <blockquote>
                                <p class="fh5co-serif">&ldquo;The stock market is filled with individuals who know the price of everything, but the value of nothing.&rdquo;</p>
                                <p class="fh5co-testimonial-author"><cite>&mdash; Phillip Fisher</cite></p>
                            </blockquote>
                        </div>
                        <!-- END .item -->
                        <div class="item">
                            <blockquote>
                                <p class="fh5co-serif">&ldquo;Invest in yourself. Your career is the engine of your wealth.&rdquo;</p>
                                <p class="fh5co-testimonial-author"><cite>&mdash; Paul Clitheroe</cite></p>
                            </blockquote>
                        </div>
                        <!-- END .item -->
                        <div class="item">
                            <blockquote>
                                <p class="fh5co-serif">&ldquo;It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.&rdquo;</p>
                                <p class="fh5co-testimonial-author"><cite>&mdash; Robert Kiyosaki</cite></p>
                            </blockquote>
                        </div>
                        <!-- END .item -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="fh5co-spacer fh5co-spacer-sm"></div>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="text-info">Our Partners</h1>
                    <div class="owl-carousel owl-theme owl-carousel-fullwidth">
                        <div class="item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/Axis_Mutual_Fund.png') }}" alt="Images">
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/DSP_Mutual_Fund.png') }}" alt="Images">
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/HDFC_Mutual_Fund.png') }}" alt="Images">
                        </div>
                        <div class="item">
                            <img class="img-responsive" style="height:150px" src="{{ asset('/').('public/images/Birla_Mutual_Fund.jpg') }}" alt="Images">
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/LIC.png') }}" alt="Images">
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/SBI-Life-Insurance-Logo.jpg') }}" alt="Images">
                        </div>
                        <div class="item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/Royal-Sundaram.jpg') }}" alt="Images">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="fh5co-spacer fh5co-spacer-lg"></div>
    <section id="fh5co-newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center">
                    <h2 class="fh5co-uppercase-heading-sm fh5co-no-margin-bottom">Stay With Latest Offers</h2>
                    <p>Shoot Your Mail, We Will Send Latest Updates To You</p>
                    <div class="fh5co-spacer fh5co-spacer-xxs"></div>
                    <form method="post" id="subscribeForm">
                        <p class="text-success text-center"></p>
                        <p class="text-danger text-center"></p>
                        <div class="form-group">
                            <label for="email" class="sr-only">Email address</label>
                            <input type="email" class="form-control input-lg" id="email" placeholder="Email" required />
                        </div>
                        <input type="submit" class="btn btn-primary btn-lg btn-block" value="Send" />
                    </form>		
                </div>
            </div>
        </div>
    </section>
@stop
@section('foot')
<script type="text/javascript">
    $(document).ready(function(){
        $('#homeMenu').addClass('active');
        $('#subscribeForm').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                url: 'home/subscribe',
                method: 'post',
                dataType: 'json',
                data: {email: $('#email').val()},
                success: function(response){
                    $('#subscribeForm').trigger('reset');
                    if(response.status){
                        $('#subscribeForm').find('.text-success').html(response.result);
                        setTimeout(function(){
                            $('#subscribeForm').find('.text-success').html('');
                        }, 3000);
                    } else {
                        $('#subscribeForm').find('.text-danger').html(response.result);
                        setTimeout(function(){
                            $('#subscribeForm').find('.text-danger').html('');
                        }, 3000);
                    }
                } 
            });
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            lazyLoad: true,
		    responsiveClass: true,
            navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
            ],
		    smartSpeed: 500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
    });
</script>
@stop