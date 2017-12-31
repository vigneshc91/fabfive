@extends('layouts/default')
@section('title', 'Commodity')
@section('top')
<!-- START #fh5co-hero -->
<aside id="fh5co-hero" style="background-image: url({{ asset('/').('public/images/sustainable-responsible-ethical-investments-1.png') }});">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="fh5co-hero-wrap">
                    <div class="fh5co-hero-intro">
                        <h2>e2isolutions<span></span></h2>
                        <h1>Commodity</h1>
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
                Commodity
            </h1>
            
        </div>
        
        
        <div class="fh5co-spacer fh5co-spacer-md"></div>
         
         <div class="col-md-12">
            <img src="{{ asset('/').('public/images/commodities_1.jpg') }}" alt="equtiy" class="fh5co-align-left img-responsive" />
            <p>
                Commodity market is a place where trading in commodities takes place. It is similar to an equity market, but instead of buying or selling shares one buys or sells commodities.
            </p>
            <p>
                The commodities markets are one of the oldest prevailing markets in the human history. In fact, derivatives trading started off in commodities with the earliest records being traced back to the 17th century when rice futures were traded in Japan.
            </p>
            <p>
                Energy commodities such as crude are closely watched by countries, corporations and consumers alike. The average Western consumer can become significantly impacted by high crude prices. Alternatively, oil-producing countries in the Middle East (that are largely dependent on petrodollars as their source of income) can become adversely affected by low crude prices. Unusual disruptions caused by weather or natural disasters can not only be an impetus for price volatility, but can also cause regional food shortages. Read on to find out about the role that various commodities play in the global economy and how investors can turn economic events into opportunities.
            </p>
        </div>

        <div class="fh5co-spacer fh5co-spacer-md"></div>

         <div id="fh5co-tab-feature-center" class="fh5co-tab text-center">
            <ul class="resp-tabs-list hor_1">
                <li>Precious Metals</li>
                <li>Base Metals</li>
                <li>Agro-Based Commodities</li>
                <li>Soft Commodities</li>
                <li>Live-Stock</li>
                <li>Energy</li>
            </ul>
            <div class="resp-tabs-container hor_1">
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Gold, Silver, Platinum, etc.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Nickel, Aluminum, Copper, Lead, Zinc.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Wheat, Corn, Cotton, Oils, Oilseeds, etc.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Coffee, Cocoa, Sugar, etc.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            Live Cattle, Pork Bellies, etc.
                        </p>
                    </div>
                </div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                Crude Oil, Natural Gas, Gasoline, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12 clearfix fh5co-header">
            <h1 class="h1 fh5co-heading fh5co-no-margin-bottom">
                Exchanges
            </h1>
        </div>
        <div class="fh5co-spacer fh5co-spacer-sm"></div>	
        <div class="col-md-12">
            <img src="{{ asset('/').('public/images/commodities_2.png') }}" alt="equtiy" class="fh5co-align-right img-responsive" />
            <p>
                With commodities playing a major and critical role in the global economic markets and affecting the lives of most people on the planet, there are multitudes of commodity and futures exchanges around the world. Each exchange carries a few commodities or specializes in a single commodity. For instance, the U.S. Futures Exchange is an important exchange that only carries energy commodities.
            </p>
            <p>
                The most popular exchanges include the CME Group, which resulted after the Chicago Mercantile Exchange and Chicago Board of Trade merged in 2006, Intercontinental Exchange, Kansas City Board of Trade and the London Metal Exchange.
            </p>
        </div>

        <div class="fh5co-spacer fh5co-spacer-md"></div>

    </div>
</div>
@stop
@section('foot')
<script type="text/javascript">
    $(document).ready(function(){
        $('#schemesMenu').addClass('active');
    });
</script>
@stop