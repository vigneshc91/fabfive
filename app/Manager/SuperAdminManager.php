<?php

namespace App\Manager;

use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\User;

class SuperAdminManager {

    public function createUser($user, $input){
        try{

            $firstName = $input['first_name'];
            $lastName = $input['last_name'];
            $email = $input['email'];
            $userType = $input['user_type'];
            $password = substr( md5(rand()), 0, 8);
            $verificationToken = md5(rand());

            $user = User::where('email', $email)->count();
            
            if($user == 0){
                User::create([
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'password' => bcrypt($password),
                    'user_type' => $userType,
                    'verification_token' => $verificationToken,
                    'status' => AppConstants::userStatus['pending']
                ]);

                $data = [
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'verificationToken' => $verificationToken,
                    'password' => $password
                ];

                // Send verification email to the admin
                Mail::send('emails.welcomeAdmin', $data, function ($message) {
                    $message->from($user->email, $user->first_name . ' ' . $user->last_name);
                    $message->subject("Welcome to FabFive");
                    $message->to($email);
                });

                return true;
            } else {
                return false;
            }
 
        } catch(Exception $e){
            throw $e;
        }
    }
    
}