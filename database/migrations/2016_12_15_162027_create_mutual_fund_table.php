<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMutualFundTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mutual_fund', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('vendor_id')->unsigned();
            $table->string('folio_number')->unique();
            $table->integer('type');
            $table->string('scheme');
            $table->date('start_date');
            $table->double('amount_invested');
            $table->date('mature_date')->nullable();
            $table->double('matured_amount')->nullable();
            $table->integer('status');
            $table->text('comments')->nullable();
            $table->timestamps();
        });

        Schema::table('mutual_fund', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('vendor_id')->references('id')->on('vendor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('mutual_fund');
    }
}
