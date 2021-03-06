<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $this->sessionManager = new SessionManager();
        $this->superAdminManager = new SuperAdminManager();
    }

    public function createAdmin(Request $request){
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type != AppConstants::userType['superAdmin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('first_name', 'last_name', 'email');
            
            $createAdminValidation = Validator::make($input, User::$createAdminRule);
            if(!$createAdminValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            
            if($this->superAdminManager->createAdmin($user, $input)){
                $response->status = true;
                $response->result = SuccessConstants::ADMIN_CREATED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::ADMIN_CREATION_FAILED;
                return json_encode($response);
            }


        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function verifyAdmin($token){
        try {
            
            if($this->superAdminManager->verifyAdmin($token)){
                return view('home.verifyAdmin')->with('message', SuccessConstants::USER_VERIFIED);
            } else {
                return view('home.verifyAdmin')->with('message', ErrorConstants::INVALID_VERIFICATION_TOKEN);
            }

        } catch(Exception $e){

        }
    }

    public function deleteAdmin(Request $request)
    {
        $response = new ServiceResponse(); 
        try{

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type != AppConstants::userType['superAdmin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

             $input = $request->only('user_id');
            
            $deleteAdminValidation = Validator::make($input, User::$deleteAdminRule);
            if(!$deleteAdminValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->superAdminManager->deleteAdmin($input)){
                $response->status = true;
                $response->result = SuccessConstants::ADMIN_DELETE_SUCCESS;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::ADMIN_DELETE_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getStatForSuperAdmin(Request $request)
    {
        $response = new ServiceResponse(); 
        try{

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type != AppConstants::userType['superAdmin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $response->status = true;
            $response->result = $this->superAdminManager->getStatForSuperAdmin();
            
            return json_encode($response);

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function login(){
        return view('superAdmin.login');
    }

    public function dashboard(){
        return view('superAdmin.dashboard');
    }

    public function create(){
        return view('superAdmin.dashboard');
    }

    public function view(){
        return view('superAdmin.dashboard');
    }
}
