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

Route::post('home/contact', 'HomeController@contactMail');

// Apis for the superadmin

Route::post('user/login', 'UserController@login');

Route::post('user/logout', 'UserController@logout');

Route::post('user/changePassword', 'UserController@changePassword');

Route::post('user/forgotPassword', 'UserController@forgotPassword');

Route::get('user/resetPassword/{token}', 'UserController@verifyResetToken');

Route::post('user/resetPassword', 'UserController@resetPassword');

Route::post('user/getUserById', 'UserController@getUserById');

Route::post('user/searchUser', 'UserController@searchUser');

Route::post('user/getUsersList', 'UserController@getUsersList');

Route::post('superAdmin/createAdmin', 'SuperAdminController@createAdmin');

Route::post('superAdmin/deleteAdmin', 'SuperAdminController@deleteAdmin');

Route::post('superAdmin/getStatForSuperAdmin', 'SuperAdminController@getStatForSuperAdmin');

Route::get('superAdmin/verifyAdmin/{token}', 'SuperAdminController@verifyAdmin');

Route::post('admin/createVendor', 'AdminController@createVendor');

Route::post('admin/editVendor', 'AdminController@editVendor');

Route::post('admin/deleteVendor', 'AdminController@deleteVendor');

Route::post('admin/getVendorById', 'AdminController@getVendorById');

Route::post('admin/getVendorsList', 'AdminController@getVendorsList');

Route::post('admin/createUser', 'AdminController@createUser');

Route::post('admin/editUser', 'AdminController@editUser');

Route::post('admin/editAddress', 'AdminController@editAddress');

Route::post('admin/deleteUser', 'AdminController@deleteUser');

Route::post('admin/createMutualFund', 'AdminController@createMutualFund');

Route::post('admin/editMutualFund', 'AdminController@editMutualFund');

Route::post('admin/deleteMutualFund', 'AdminController@deleteMutualFund');

Route::post('admin/getMutualFundById', 'AdminController@getMutualFundById');

Route::post('admin/getMutualFundByFolioNumber', 'AdminController@getMutualFundByFolioNumber');

Route::post('admin/getMutualFundsList', 'AdminController@getMutualFundsList');

Route::post('user/getLoggedInUser', 'UserController@getLoggedInUser');

Route::post('admin/getVendorStat', 'AdminController@getVendorStat');

Route::post('admin/getUserStat', 'AdminController@getUserStat');

Route::post('admin/getMutualFundStat', 'AdminController@getMutualFundStat');

Route::post('admin/getSubscribersList', 'AdminController@getSubscribersList');

Route::post('admin/getSubscribersStat', 'AdminController@getSubscribersStat');

Route::post('admin/sendMailToSubscribers', 'AdminController@sendMailToSubscribers');

// Serving web pages

Route::get('superAdmin', 'SuperAdminController@login');

Route::get('superAdmin/login', 'SuperAdminController@login');

Route::get('superAdmin/dashboard', 'SuperAdminController@dashboard');

Route::get('superAdmin/create', 'SuperAdminController@create');

Route::get('superAdmin/view', 'SuperAdminController@view');

Route::get('user/changePassword', 'UserController@password');

Route::get('admin', 'AdminController@login');

Route::get('admin/login', 'AdminController@login');

Route::get('admin/dashboard', 'AdminController@dashboard');

Route::get('vendor/dashboard', 'AdminController@vendorDashboard');

Route::get('vendor/create', 'AdminController@vendorCreate');

Route::get('vendor/view', 'AdminController@vendorView');

Route::get('user/dashboard', 'AdminController@userDashboard');

Route::get('user/create', 'AdminController@userCreate');

Route::get('user/view', 'AdminController@userView');

Route::get('mutualFund/dashboard', 'AdminController@mutualFundDashboard');

Route::get('mutualFund/create', 'AdminController@mutualFundCreate');

Route::get('mutualFund/view', 'AdminController@mutualFundView');

Route::get('user/forgotPassword', 'UserController@userForgotPassword');

Route::get('subscription/dashboard', 'AdminController@subscriptionDashboard');

Route::get('subscription/view', 'AdminController@subscriptionView');

Route::get('subscription/sendMail', 'AdminController@subscriptionSendMail');

