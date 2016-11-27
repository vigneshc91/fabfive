<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vendor';
    
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

    // Create vendor validation rule
    public static $createVendorRule = array(
        'type' => 'required',
        'name' => 'required'
    );

    // Edit vendor validation rule
    public static $editVendorRule = array(
        'vendor_id' => 'required'
    );

    // Delete vendor validation rule
    public static $deleteVendorRule = array(
        'vendor_id' => 'required'
    );

    // Get vendor validation rule
    public static $getVendorRule = array(
        'vendor_id' => 'required'
    );
}
