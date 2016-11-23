<?php

namespace App\Helper;

class ErrorConstants {

    const REQUIRED_FIELDS_EMPTY = "Required fields empty";
    const LOGIN_FAILED = "Invalid credentials, Login Failed";
    const USER_NOT_LOGGED_IN = "User not logged in";
    const NO_PRIVILEGE = "No privilege";
    
    const USER_CREATION_FAILED = "User creation failed";
    const USER_NOT_FOUND = "User not found";
    const ADMIN_CREATION_FAILED = "Admin creation failed";
    const ADMIN_DELETE_FAILED = "Admin delete failed";
    
    const INVALID_OLD_PASSWORD = "Invalid old password";
    const EMAIL_NOT_EXIST = "Email not exist";
    const EMAIL_NOT_EXIST_OR_ALREADY_SENT = "Email not exist or verification link already sent to your email";
    const INVALID_RESET_TOKEN = "Invalid reset token";

    const COMPANY_CREATION_FAILED = "Company creation failed";
    const COMPANY_EDIT_FAILED = "Company edit failed";
    const COMPANY_DELETE_FAILED= "Company delete failed";
    const COMPANY_NOT_FOUND = "Company not found";
}