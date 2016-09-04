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
                            <h2>FabFive Investors<span></span></h2>
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
                    <p class="text-center"><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/commodity.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Commodity</h3>
                    <p class="text-center fh5co-feature-description">A raw material or primary agricultural product that can be bought and sold.</p>
                    <p class="text-center"><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="clearfix visible-sm-block"></div>
                <div class="col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/mutual-fund.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Mutual Fund</h3>
                    <p class="text-center fh5co-feature-description">An investment programme funded by shareholders that trades in diversified holdings.</p>
                    <p class="text-center"><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="col-md-offset-2 col-sm-offset-0 col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/Bonds.png') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Bonds</h3>
                    <p class="text-center fh5co-feature-description">An investor loans money to an entity which borrows the funds for a defined period of time.</p>
                    <p class="text-center"><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
                <div class="col-md-offset-0 col-sm-offset-3 col-md-4 col-sm-6 fh5co-feature-item">
                    <span class="fh5co-feature-icon fh5co-circle"><img src="{{ asset('/').('public/images/Compass-Wealth-Pic.jpg') }}" alt="Images" class="img-circle"></span>
                    <h3 class="text-center fh5co-feature-title h4 text-uppercase">Wealth Insurance</h3>
                    <p class="text-center fh5co-feature-description">A store of value, in a liquid form, for a potential financial emergency.</p>
                    <p class="text-center"><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
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
    <section id="fh5co-newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center">
                    <h2 class="fh5co-uppercase-heading-sm fh5co-no-margin-bottom">Stay With Latest Offers</h2>
                    <p>Shoot Your Mail, We Will Send Latest Updates To You</p>
                    <div class="fh5co-spacer fh5co-spacer-xxs"></div>
                    <form method="post" action="#">
                        <div class="form-group">
                        <label for="email" class="sr-only">Email address</label>
                        <input type="email" class="form-control input-lg" id="email" placeholder="Email">
                        </div>
                        <input type="submit" class="btn btn-primary btn-lg btn-block" value="Send">
                    </form>		
                </div>
            </div>
        </div>
    </section>
@stop