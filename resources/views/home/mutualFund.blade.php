@extends('layouts/default')
@section('title', 'Mutual Fund')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                        <h2>e2isolutions<span></span></h2>
                        <h1>Mutual Fund</h1>
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
                Mutual Fund
            </h1>
        </div>
        
        <div class="fh5co-spacer fh5co-spacer-md"></div>
        
        <div class="col-md-12">
            <img src="{{ asset('/').('public/images/mutual_funds_1.jpg') }}" alt="equtiy" class="fh5co-align-left img-responsive" />
            <p>
                It's a pool of money from numerous investors who wish to save or make money just like you. Investing in a mutual fund can be a lot easier than buying and selling individual stocks and bonds on your own. Investors can sell their shares when they want.
            </p>
            <p>
               These days you are hearing more and more about mutual funds as a means of investment. If you are like most people, you probably have most of your money in a bank savings account and your biggest investment may be your home. Apart from that, investing is probably something you simply do not have the time or knowledge to get involved in. You are not the only one. This is why investing through mutual funds has become such a popular way of investing
            </p>
        </div>

       <div class="fh5co-spacer fh5co-spacer-md"></div>

        <div class="col-md-12 clearfix fh5co-header">
            <h1 class="h1 fh5co-heading fh5co-no-margin-bottom">
                Mutual Fund Objectives
            </h1>
        </div>
        <div class="fh5co-spacer fh5co-spacer-sm"></div>	
        <div class="col-md-12">
            <img src="{{ asset('/').('public/images/mutual_funds_2.jpg') }}" alt="equtiy" class="fh5co-align-right img-responsive" />
            <p>
                There are many different types of mutual funds, each with its own set of goals. The investment objective is the goal that the fund manager sets for the mutual fund when deciding which stocks and bonds should be in the fund's portfolio.
            </p>
            <p>
                For example, an objective of a growth stock fund might be: This fund invests primarily in the equity markets with the objective of providing long-term capital appreciation towards meeting your long-term financial needs such as retirement or a child' s education.
            </p>
            <p>
                As a small investor, you may find that it is not possible to buy shares of larger corporations. Mutual funds generally buy and sell securities in large volumes which allow investors to benefit from lower trading costs. The smallest investor can get started on mutual funds because of the minimal investment requirements. You can invest with a minimum of Rs.500 in a Systematic Investment Plan on a regular basis. Investments held by investors for a period of 12 months or more qualify for capital gains and will be taxed accordingly. These investments also get the benefit of indexation.
            </p>
            <p>
                With open-end funds, you can redeem all or part of your investment any time you wish and receive the current value of the shares. Funds are more liquid than most investments in shares, deposits and bonds. Moreover, the process is standardised, making it quick and efficient so that you can get your cash in hand as soon as possible.
            </p>
            <p>
                With rupee-cost averaging, you invest a specific rupee amount at regular intervals regardless of the investment's unit price. As a result, your money buys more units when the price is low and fewer units when the price is high, which can mean a lower average cost per unit over time. Rupee-cost averaging allows you to discipline yourself by investing every month or quarter rather than making sporadic investments.
            </p>
            <p>
                The performance of a mutual fund is reviewed by various publications and rating agencies, making it easy for investors to compare fund to another. As a unitholder, you are provided with regular updates, for example daily NAVs, as well as information on the fund's holdings and the fund manager's strategy.
            </p>
            <p>
                All mutual funds are required to register with SEBI (Securities Exchange Board of India). They are obliged to follow strict regulations designed to protect investors. All operations are also regularly monitored by the SEBI.
            </p>
        </div>

        <div class="fh5co-spacer fh5co-spacer-md"></div>

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