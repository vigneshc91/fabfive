<?php

namespace App\Helper;

class ErrorConstants {

    const REQUIRED_FIELDS_EMPTY = "Required fields empty";
    const LOGIN_FAILED = "Invalid credentials, Login Failed";
    const USER_NOT_LOGGED_IN = "User not logged in";
    const NO_PRIVILEGE = "No privilege";
    
    const USER_CREATION_FAILED = "User creation failed";
    const ADMIN_CREATION_FAILED = "Admin creation failed";

    const INVALID_OLD_PASSWORD = "Invalid old password";
    const EMAIL_NOT_EXIST = "Email not exist";
    const INVALID_RESET_TOKEN = "Invalid reset token";
}