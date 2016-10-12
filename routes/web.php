<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'HomeController@index');

Route::get('contact', array('as' => 'contact', 'uses' => 'HomeController@contact'));

Route::get('aboutUs', array('as' => 'aboutUs', 'uses' => 'HomeController@aboutUs'));

Route::get('equity', array('as' => 'equity', 'uses' => 'HomeController@equity'));

Route::get('commodity', array('as' => 'commodity', 'uses' => 'HomeController@commodity'));

Route::get('debtMarket', array('as' => 'debtMarket', 'uses' => 'HomeController@debtMarket'));

Route::get('mutualFund', array('as' => 'mutualFund', 'uses' => 'HomeController@mutualFund'));

Route::get('wealthInsurance', array('as' => 'wealthInsurance', 'uses' => 'HomeController@wealthInsurance'));
