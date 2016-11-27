<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->integer('gender')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('profile_pic')->nullable();
            $table->integer('user_type');
            $table->integer('status');
            $table->string('pan_card')->nullable();
            $table->string('introducer_name')->nullable();
            $table->rememberToken();
            $table->string('verification_token')->nullable();
            $table->string('reset_token')->nullable();
            $table->integer('reset_status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
