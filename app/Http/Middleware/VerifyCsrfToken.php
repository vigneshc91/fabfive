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
        'user/login', 'user/logout', 'user/changePassword', 'user/forgotPassword', 'user/resetPassword', 'user/getUserById', 'user/getUsersList',
        'superAdmin/createAdmin', 'superAdmin/deleteAdmin', 'superAdmin/verifyAdmin',
        'admin/createCompany', 'admin/editCompany', 'admin/deleteCompany', 'admin/getCompanyById', 'admin/getCompanyList',
        'home/subscribe', 'home/unsubscribe'
    ];
}
