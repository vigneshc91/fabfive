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
    const USER_DELETE_FAILED = "User delete failed";
    const USER_EDIT_FAILED = "User edit failed";
    const USER_ADDRESS_EDIT_FAILED = "User address edit failed";

    const INVALID_OLD_PASSWORD = "Invalid old password";
    const EMAIL_NOT_EXIST = "Email not exist";
    const EMAIL_NOT_EXIST_OR_ALREADY_SENT = "Email not exist or verification link already sent to your email";
    const INVALID_RESET_TOKEN = "Invalid reset token";

    const VENDOR_CREATION_FAILED = "Vendor creation failed";
    const VENDOR_EDIT_FAILED = "Vendor edit failed";
    const VENDOR_DELETE_FAILED= "Vendor delete failed";
    const VENDOR_NOT_FOUND = "Vendor not found";

    const ALREADY_SUBSCRIBED = "Already Subscribed";
    const UNSUBSCRIBE_FAILED = "Already unsubscribed or email not exist";

    const MUTUAL_FUND_CREATION_FAILED = "Mutual Fund creation failed";
    const MUTUAL_FUND_EDIT_FAILED = "Mutual Fund edit failed";
    const MUTUAL_FUND_DELETE_FAILED = "Mutual Fund delete failed";
    const MUTUAL_FUND_NOT_FOUND = "Mutual Fund not found";

    const CONTACT_FAILED = "There is a problem sending mail, please try again later";
    const INVALID_VERIFICATION_TOKEN = "Invalid verification token";

    const EMAIL_SENDING_FAILED = "Email Sending Failed";
}