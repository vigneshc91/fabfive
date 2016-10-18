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
        "female" => 2,
        "others" => 3
    );
}