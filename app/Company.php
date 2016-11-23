<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'company';
    
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

    // Create company validation rule
    public static $createCompanyRule = array(
        'type' => 'required',
        'name' => 'required'
    );

    // Edit company validation rule
    public static $editCompanyRule = array(
        'company_id' => 'required'
    );

    // Delete company validation rule
    public static $deleteCompanyRule = array(
        'company_id' => 'required'
    );

    // Get company validation rule
    public static $getCompanyRule = array(
        'company_id' => 'required'
    );
}
