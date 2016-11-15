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
        'email' => 'required',
        'user_type' => 'required'
    );
}
