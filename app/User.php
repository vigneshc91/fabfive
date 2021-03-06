<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Get the address of the user.
     */
    public function address()
    {
        return $this->hasOne('App\Address');
    }

    /**
     * Get the mutual fund of the user.
     */
    public function mutualFund()
    {
        return $this->hasMany('App\MutualFund');
    }

    /**
     * Login validation rule
     */
    public static $userLoginRule = array(
        'email' => 'required',
        'password' => 'required',
    );

    /**
     * Create Admin validation rule
     */
    public static $createAdminRule = array(
        'first_name' => 'required',
        'email' => 'required'
    );

    // User change password validation rule
    public static $userChangePasswordRule = array(
        'old_password' => 'required',
        'new_password' => 'required'
    );

    // Forgot password validation rule
    public static $forgotPasswordRule = array(
        'email' => 'required'
    );

    // Reset password validation rule
    public static $resetPasswordRule = array(
        'reset_token' => 'required',
        'password' => 'required'
    );

    // Delete admin validation rule
    public static $deleteAdminRule = array(
        'user_id' => 'required'
    );

    // Get user validation rule
    public static $getUserRule = array(
        'user_id' => 'required'
    );

    // Create user validation rule
    public static $createUserRule = array(
        'first_name' => 'required',
        'last_name' => 'required',
        'email' => 'required',
        'date_of_birth' => 'required',
        'gender' => 'required',
        'contact_number' => 'required',
        'pan_card' => 'required',
        'address_line_1' => 'required',
        'city' => 'required',
        'state' => 'required',
        'country' => 'required'
    );

    // Edit user validation rule
    public static $editUserRule = array(
        'user_id' => 'required'
    );

    // Delete user validation rule
    public static $deleteUserRule = array(
        'user_id' => 'required'
    );
}
