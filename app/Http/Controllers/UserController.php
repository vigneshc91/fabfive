<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Helper\ServiceResponse;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\Manager\UserManager;
use App\User;


class UserController extends Controller
{

    function __construct() {
        $this->userManager = new UserManager();
    }
    
    public function login(Request $request) {
        $response = new ServiceResponse();
        try {
            $input = array();
            $input['email'] = $request->input('email');
            $input['password'] = $request->input('password');
            $loginValidation = Validator::make($input, User::$userLoginRule);
            if(!$loginValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            
            if($this->userManager->login($input)) {
                $response->status = true;
                $response->result = SuccessConstants::LOGIN_SUCCESS;
            } else {
                $response->status = false;
                $response->result = ErrorConstants::LOGIN_FAILED;
            }

            return json_encode($response);

        } catch(Exception $e) {

            $response->status = false;
            $response->result = $e;
            return json_encode($response);

        }
    }
    
}
