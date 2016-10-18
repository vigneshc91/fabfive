<?php

namespace App\Manager;

use Illuminate\Support\Facades\Auth;

use App\Helper\AppConstants;

class UserManager {

    public function login($input) {
        try {
            
            $email = $input['email'];
            $password = bcrypt($input['password']);

            $login = Auth::attempt(['email' => $email, 'password' => $password, 'status' => AppConstants::userStatus['activated']]);
            
            return $login;

        } catch(Exception $e){
            throw $e;
        }
    }
    
}