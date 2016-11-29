<?php

namespace App\Manager;

use JWTAuth;

class SessionManager {

    public function getLoggedInUser(){
        try {

            return JWTAuth::parseToken()->authenticate();

        } catch(Exception $e){
            throw $e;
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return null;
        }
    }

}