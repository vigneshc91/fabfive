<?php

namespace App\Manager;

use Illuminate\Support\Facades\Auth;

use App\Helper\AppConstants;
use App\User;

class UserManager {

    public function login($input) {
        try {
            
            $email = $input['email'];
            $password = $input['password'];

            $login = Auth::attempt(['email' => $email, 'password' => $password, 'status' => AppConstants::userStatus['activated']]);
            
            return $login;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function logout(){
        try{

            return Auth::logout();

        } catch(Exception $e) {
            throw $e;
        }
    }
    
}