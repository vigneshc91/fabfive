<?php

namespace App\Helper;

class AppConstants {
    
    const userType = array(
        "superAdmin" => 1,
        "admin" => 2,
        "user" => 3
    );

    const userStatus = array(
        "pending" => 0,
        "activated" => 1
    );

    const resetStatus = array(
        "initial" => 0,
        "initiated" => 1
    );

    const gender = array(
        "male" => 1,
        "female" => 2
    );
    
    const productType = array(
        'equity' => 1,
        'commodity' => 2,
        'mutualFund' => 3,
        'lifeInsurance' => 4,
        'healthInsurance' => 5,
        'generalInsurance' => 6
    );

    const subscriptionType = array(
        'subscribed' => 1,
        'unsubscribed' => 2
    );

    const APP_URL = "http://localhost/fabfive/";

    const SUPER_ADMIN_FIRST_NAME = "Super";
    const SUPER_ADMIN_LAST_NAME = "Admin";
    const SUPER_ADMIN_EMAIL = "support@fabfive.in";
    const SUPER_ADMIN_PASSWORD = "admin123";
    
    const USER_START_VALUE = 0;
    const USER_SIZE_VALUE = 10;
    
    const VENDOR_START_VALUE = 0;
    const VENDOR_SIZE_VALUE = 10;
}
