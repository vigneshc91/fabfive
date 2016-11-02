<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Helper\ServiceResponse;
use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\Manager\SessionManager;
use App\Manager\SuperAdminManager;
use App\User;

class SuperAdminController extends Controller
{
    
    function __construct(){
        $this->superAdminManager = new SuperAdminManager();
    }

    public function createUser(Request $request){
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type != AppConstants::userType['superAdmin'] || $user->user_type != AppConstants::userType['admin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('first_name', 'last_name', 'email', 'user_type');
            
            $createAdminValidation = Validator::make($input, User::$createAdminRule);
            if(!$createAdminValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            $this->userManager->createAdmin($input);


        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }
}
