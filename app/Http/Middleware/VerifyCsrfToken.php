<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'user/login', 'user/logout', 'user/changePassword', 'user/forgotPassword', 'user/resetPassword', 'user/getUserById', 'user/searchUser', 'user/getUsersList', 'user/getLoggedInUser',
        'superAdmin/createAdmin', 'superAdmin/deleteAdmin', 'superAdmin/verifyAdmin',
        'admin/createVendor', 'admin/editVendor', 'admin/deleteVendor', 'admin/getVendorById', 'admin/getVendorsList',
        'admin/createUser', 'admin/editUser', 'admin/editAddress', 'admin/deleteUser',
        'home/subscribe', 'home/unsubscribe', 'home/contact',
        'admin/createMutualFund', 'admin/editMutualFund', 'admin/deleteMutualFund',
        'admin/getMutualFundById', 'admin/getMutualFundByFolioNumber', 'admin/getMutualFundsList'
    ];
}
