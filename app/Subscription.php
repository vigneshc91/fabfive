<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'subscription';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];


    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    // Subscript validation rule
    public static $subscriptionRule = array(
        'email' => 'required'
    );
}
