<?php

namespace App\Manager;

use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\User;

class SuperAdminManager {

    public function createUser($input){
        try{

            $firstName = $input['first_name'];
            $lastName = $input['last_name'];
            $email = $input['email'];
            $userType = $input['user_type'];

            $user = User::where('email', $email)->count();
            if($user == 0){
                User::create([
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'password' => bcrypt($firstName),
                    'user_type' => $userType,
                    'status' => AppConstants::userStatus['activated']
                ]);

                return true;
            } else {
                return false;
            }
 
        } catch(Exception $e){
            throw $e;
        }
    }
    
}