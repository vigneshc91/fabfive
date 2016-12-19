<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MutualFund extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mutual_fund';
    
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

    // Create mutual fund validation rule
    public static $createMutualFundRule = array(
        'user_id' => 'required',
        'vendor_id' => 'required',
        'folio_number' => 'required',
        'type' => 'required|integer',
        'scheme' => 'required',
        'start_date' => 'required|date',
        'amount_invested' => 'required|numeric'
    );

    // Edit mutual fund validation rule
    public static $editMutualFundRule = array(
        'mutual_fund_id' => 'required|integer'
    );

    // Delete mutual fund validation rule
    public static $deleteMutualFundRule = array(
        'mutual_fund_id' => 'required|integer'
    );

    // Get mutual fund by id validation rule
    public static $getMutualFundByIdRule = array(
        'mutual_fund_id' => 'required|integer'
    );

    // Get mutual fund by folio number validation rule
    public static $getMutualFundByFolioNumberRule = array(
        'folio_number' => 'required|integer'
    );
}
