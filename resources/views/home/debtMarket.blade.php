@extends('layouts/default')
@section('title', 'Debt Market')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                        <h2>FabFive Investors<span></span></h2>
                        <h1>Debt Market</h1>
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
                Debt Market
            </h1>
        </div>
        
        <div class="fh5co-spacer fh5co-spacer-md"></div>
        
        <div class="col-md-12">
            <img src="{{ asset('/').('public/images/debt_1.jpg') }}" alt="equtiy" class="fh5co-align-left img-responsive" />
            <p>
                It's a market meant for trading (i.e. buying or selling) fixed income instruments. Fixed income instruments could be securities issued by Central and State Governments, Municipal Corporations, Govt. Bodies or by private entities like financial institutions, banks, corporates, etc.
            </p>
            <p>
               Simply put, a bond/debt can be defined as a loan for which an investor is the lender. The issuer of the bond pays the investor interest (at a predetermined rate and schedule) in return for the funding.
            </p>
            <p>
                The maturity date refers to the date on which the issuer has to repay the principal to the investor.
            </p>
            <p>
                When an investor invests money via equity, he becomes an owner in the corporation issuing the equity shares. With ownership he also gets voting right in the company and a share in future profits.
            </p>
            <p>
                In case of debt, the investor becomes a creditor to the issuing entity. As a creditor, he has higher claim to the assets of the entity as compared to a shareholder in the event of the company filing for bankruptcy. However, a debt investor does not get voting rights or a share in future profits. He is only repaid in the form of a predetermined interest rate.
            </p>
        </div>

        <div class="fh5co-spacer fh5co-spacer-md"></div>
        
        <div class="col-md-12">
            <h3>Advantages of fixed income/debt.</h3>
            <ul>
                <li>
                    The common trend among retail investors is investing in equity, since equities are perceived to offer a higher scope of better returns. However, to build a diversified and stable portfolio, investing in debt securities is a must since it assures fixed income.
                </li>
                <li>
                    The primary advantage of a fixed income security is a steady and predictable source of payments by way of interest and repayment of principal at the time of maturity of the instrument. Debt instruments are generally issued by eligible entities (public or private) against money borrowed by them from investors. Hence, debt securities enjoy relatively higher safety towards repayment.
                </li>
                <li>
                    Government securities (also called G-Secs) offer the investor virtually zero default risk, making these one of the most stable forms of fixed income instruments. Another advantage is that the investor is not liable to pay any TDS on interest payments from G-Secs.
                </li>
                <li>
                    Fixed income securities can be issued by any entity (public or private) provided they meet the statutory norms on issue of such securities.
                </li>
            </ul>
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