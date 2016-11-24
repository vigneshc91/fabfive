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

Route::post('home/subscribe', 'HomeController@subscribe');

Route::get('home/unsubscribe/{id}', 'HomeController@unsubscribe');

// Apis for the superadmin

Route::post('user/login', 'UserController@login');

Route::post('user/logout', 'UserController@logout');

Route::post('user/changePassword', 'UserController@changePassword');

Route::post('user/forgotPassword', 'UserController@forgotPassword');

Route::get('user/resetPassword/{token}', 'UserController@verifyResetToken');

Route::post('user/resetPassword', 'UserController@resetPassword');

Route::post('user/getUserById', 'UserController@getUserById');

Route::post('user/getUsersList', 'UserController@getUsersList');

Route::post('superAdmin/createAdmin', 'SuperAdminController@createAdmin');

Route::post('superAdmin/deleteAdmin', 'SuperAdminController@deleteAdmin');

Route::get('superAdmin/verifyAdmin/{token}', 'SuperAdminController@verifyAdmin');

Route::post('admin/createCompany', 'AdminController@createCompany');

Route::post('admin/editCompany', 'AdminController@editCompany');

Route::post('admin/deleteCompany', 'AdminController@deleteCompany');

Route::post('admin/getCompanyById', 'AdminController@getCompanyById');

Route::post('admin/getCompanyList', 'AdminController@getCompanyList');


