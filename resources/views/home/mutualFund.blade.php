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

        <div class="col-md-12 clearfix fh5co-header">
            <h1 class="h1 fh5co-heading fh5co-no-margin-bottom">
                Our Partners
            </h1>

            <div class="fh5co-spacer fh5co-spacer-md"></div>

             <div>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#axis" aria-controls="axis" role="tab" data-toggle="tab">Axis</a></li>
                    <li role="presentation"><a href="#birla" aria-controls="birla" role="tab" data-toggle="tab">Aditya Birla</a></li>
                    <li role="presentation"><a href="#dsp" aria-controls="dsp" role="tab" data-toggle="tab">DSP Black Rock</a></li>
                    <li role="presentation"><a href="#hdfc" aria-controls="hdfc" role="tab" data-toggle="tab">HDFC</a></li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                
                    <!-- Axis -->
                    <div role="tabpanel" class="tab-pane active" id="axis">
                        <div class="fh5co-spacer fh5co-spacer-sm"></div>
                        <div class="col-md-offset-4 col-md-4 col-sm-6 fh5co-feature-item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/Axis_Mutual_Fund.png') }}" alt="Images">
                        </div>
                        <div class="fh5co-spacer fh5co-spacer-sm"></div>
                        <h2 class="text-center text-danger">Performance of selected best fund</h2>
                        <table class="table table-striped table-responsive">
                            <thead>
                                <tr class="text-info">
                                    <th class="text-center">Fund Name</th>
                                    <th class="text-center col-md-2">Date of Inception</th>
                                    <th class="text-center">Current Value of Investment if Rs.10,000 was invested on Inception date</th>
                                    <th class="text-center">Since Inception CAGR (%)</th>
                                    <th class="text-center">5 Years CAGR (%)</th>
                                    <th class="text-center">3 Years CAGR (%)</th>
                                    <th class="text-center">1 Years CAGR (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Axis Equity Fund</td>
                                    <td>1-May-2010</td>
                                    <td>24,490</td>
                                    <td>11.99%</td>
                                    <td>15.48%</td>
                                    <td>7.50%</td>
                                    <td>29.92%</td>
                                </tr>
                                <tr>
                                    <td>Axis Focus 25 Fund</td>
                                    <td>29-Jun-2012</td>
                                    <td>25,430</td>
                                    <td>18.77%</td>
                                    <td>17.73%</td>
                                    <td>14.37%</td>
                                    <td>35.41%</td>
                                </tr>
                                <tr>
                                    <td>Axis Mid Cap Fund</td>
                                    <td>18-Feb-2011</td>
                                    <td>33,220</td>
                                    <td>19.35%</td>
                                    <td>20.42%</td>
                                    <td>11.38%</td>
                                    <td>33.95%</td>
                                </tr>
                                <tr>
                                    <td>Axis Long Term Equity Fund (Tax Saver Fund)</td>
                                    <td>29-Dec-2009</td>
                                    <td>40,218</td>
                                    <td>19.19%</td>
                                    <td>22.17%</td>
                                    <td>12.33%</td>
                                    <td>28.46%</td>
                                </tr>
                                <tr>
                                    <td>Axis Equity Saver Fund</td>
                                    <td>14-Aug-2015</td>
                                    <td>11,640 </td>
                                    <td>6.83%</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>11.82%</td>
                                </tr>
                                <tr>
                                    <td>Axis Income Saver Fund</td>
                                    <td>16-Jul-2010</td>
                                    <td>18,286 </td>
                                    <td>8.52%</td>
                                    <td>9.60%</td>
                                    <td>7.14%</td>
                                    <td>9.93%</td>
                                </tr>
                                <tr>
                                    <td>Axis Children's Gift Fund</td>
                                    <td>12-Aug-2015</td>
                                    <td>12,360 </td>
                                    <td>11.29%</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>16.72%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- End Axis -->

                    <!-- Birla -->
                    <div role="tabpanel" class="tab-pane" id="birla">
                        <div class="fh5co-spacer fh5co-spacer-sm"></div>
                        <div class="col-md-offset-5 col-md-4 col-sm-6 fh5co-feature-item">
                            <img class="img-responsive" style="height:200px" src="{{ asset('/').('public/images/Birla_Mutual_Fund.jpg') }}" alt="Images">
                        </div>
                        <div class="fh5co-spacer fh5co-spacer-sm"></div>

                        <table class="table table-striped table-responsive">
                            <thead>
                                <tr class="text-info">
                                    <th class="text-center">Scheme</th>
                                    <th class="text-center">AUM</th>
                                    <th class="text-center">Date of Inception</th>
                                    <th class="text-center">1 yr</th>
                                    <th class="text-center">3 yrs</th>
                                    <th class="text-center">5 yrs</th>
                                    <th class="text-center">Since Inception</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Aditya Birla Sun Life Frontline Equity Fund</td>
                                    <td>19705</td>
                                    <td>Aug 29, 2002</td>
                                    <td>9.2 %</td>
                                    <td>8.44 %</td>
                                    <td>17.08 %</td>
                                    <td>21.58 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Balanced 95 Fund</td>
                                    <td>13967</td>
                                    <td>Feb 09, 1995</td>
                                    <td>8.66 %</td>
                                    <td>9.4 %</td>
                                    <td>17.16 %</td>
                                    <td>20.44 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Equity Fund</td>
                                    <td>8602</td>
                                    <td>Aug 26, 1998</td>
                                    <td>11.17 %</td>
                                    <td>12.33 %</td>
                                    <td>22.02 %</td>
                                    <td>24.16 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Advantage Fund</td>
                                    <td>5819</td>
                                    <td>Feb 23, 1995</td>
                                    <td>10.96 %</td>
                                    <td>10.96 %</td>
                                    <td>22.53 %</td>
                                    <td>18.4 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Top 100 Fund</td>
                                    <td>3959</td>
                                    <td>Oct 23, 2005</td>
                                    <td>8.23 %</td>
                                    <td>8.28 %</td>
                                    <td>17.59 %</td>
                                    <td>14.73 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Balanced Advantage fund</td>
                                    <td>3304</td>
                                    <td>Apr 24, 2000</td>
                                    <td>4.85 %</td>
                                    <td>10.3 %</td>
                                    <td>13.14 %</td>
                                    <td>9.38 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Pure Value Fund</td>
                                    <td>3263</td>
                                    <td>Mar 26, 2008</td>
                                    <td>19.58 %</td>
                                    <td>17.03 %</td>
                                    <td>28.97 %</td>
                                    <td>19.87 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life MNC Fund</td>
                                    <td>3245</td>
                                    <td>Dec 26, 1999</td>
                                    <td>17.24 %</td>
                                    <td>8.21 %</td>
                                    <td>25 %</td>
                                    <td>17.97 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Midcap Fund</td>
                                    <td>2393</td>
                                    <td>Oct 02, 2002</td>
                                    <td>11.44 %</td>
                                    <td>12.71 %</td>
                                    <td>23.11 %</td>
                                    <td>24.75 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Small And Midcap Fund</td>
                                    <td>2070</td>
                                    <td>May 30, 2007</td>
                                    <td>17.02 %</td>
                                    <td>18.93 %</td>
                                    <td>27.7 %</td>
                                    <td>13.7 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Banking and Financial Services Fund</td>
                                    <td>1453</td>
                                    <td>Dec 13, 2013</td>
                                    <td>12.7 %</td>
                                    <td>15.81 %</td>
                                    <td>-</td>
                                    <td>25.37 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Dividend Yield Plus</td>
                                    <td>1026</td>
                                    <td>Feb 25, 2003</td>
                                    <td>4.68 %</td>
                                    <td>6.01 %</td>
                                    <td>14.09 %</td>
                                    <td>20.53 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life Index Fund</td>
                                    <td>160</td>
                                    <td>Sep 17, 2002</td>
                                    <td>11.27 %</td>
                                    <td>5.84 %</td>
                                    <td>12.23 %</td>
                                    <td>15.95 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life India Reforms Fund</td>
                                    <td>111</td>
                                    <td>Jun 24, 2010</td>
                                    <td>11.98 %</td>
                                    <td>11.13 %</td>
                                    <td>17.67 %</td>
                                    <td>9.13 %</td>
                                </tr>
                                <tr>
                                    <td>Aditya Birla Sun Life New Millennium Fund</td>
                                    <td>105</td>
                                    <td>Jan 14, 2000</td>
                                    <td>32.76 %</td>
                                    <td>10.32 %</td>
                                    <td>18.21 %</td>
                                    <td>8.87 %</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    
                    <!-- DSP -->
                    <div role="tabpanel" class="tab-pane" id="dsp">
                        <div class="fh5co-spacer fh5co-spacer-md"></div>
                        <div class="col-md-offset-4 col-md-4 col-sm-6 fh5co-feature-item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/DSP_Mutual_Fund.png') }}" alt="Images">
                        </div>
                    </div>
                    
                    <!-- HDFC -->
                    <div role="tabpanel" class="tab-pane" id="hdfc">
                        <div class="fh5co-spacer fh5co-spacer-md"></div>
                        <div class="col-md-offset-4 col-md-4 col-sm-6 fh5co-feature-item">
                            <img class="img-responsive" src="{{ asset('/').('public/images/HDFC_Mutual_Fund.png') }}" alt="Images">
                        </div>
                    </div>

                </div>

            </div>

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