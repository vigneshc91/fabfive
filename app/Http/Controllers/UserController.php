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
use App\Manager\UserManager;
use App\User;


class UserController extends Controller
{

    function __construct() {
        $this->userManager = new UserManager();
        $this->sessionManager = new SessionManager();
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

            $result = $this->userManager->login($input);
            if(!$result) {
                $response->status = false;
                $response->result = ErrorConstants::LOGIN_FAILED;
            } else {
                $response->status = true;
                $response->result = $result;
            }

            return json_encode($response);

        } catch(Exception $e) {

            $response->status = false;
            $response->result = $e;
            return json_encode($response);

        }
    }

    public function logout(){
        $response = new ServiceResponse(); 
        try {
            
            $this->userManager->logout();
            
            $response->status = true;
            $response->result = SuccessConstants::LOGOUT_SUCCESS;
            return json_encode($response);


        } catch(Exception $e) {
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function changePassword(Request $request){
        $response = new ServiceResponse();
        try {

            $input = $request->only('old_password', 'new_password', 'token');
            
            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }


            $changePasswordValidation = Validator::make($input, User::$userChangePasswordRule);

            if(!$changePasswordValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }
            
            if($this->userManager->changePassword($user, $input)){
                $response->status = true;
                $response->result = SuccessConstants::PASSWORD_CHANGED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::INVALID_OLD_PASSWORD;
                return json_encode($response);
            }
            
        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function forgotPassword(Request $request){
        $response = new ServiceResponse();
        try {

            $input = $request->only('email');

            $forgotPasswordValidation = Validator::make($input, User::$forgotPasswordRule);

            if(!$forgotPasswordValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->userManager->forgotPassword($input)){
                $response->status = true;
                $response->result = SuccessConstants::FORGOT_PASSWORD_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::EMAIL_NOT_EXIST_OR_ALREADY_SENT;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function verifyResetToken($token){
        try{
            
            if($this->userManager->verifyResetToken($token)){
                return json_encode("valid token");
            } else {
                return json_encode("invalid reset token");
            }

        } catch(Exception $e){

        }
    }

    public function resetPassword(Request $request)
    {
        $response = new ServiceResponse();
         try {

             $input = $request->only('reset_token', 'password');

            $resetPasswordValidation = Validator::make($input, User::$resetPasswordRule);

            if(!$resetPasswordValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->userManager->resetPassword($input)){
                $response->status = true;
                $response->result = SuccessConstants::RESET_PASSWORD_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::INVALID_RESET_TOKEN;
                return json_encode($response);
            }

         } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
         }
    }

    public function getUserById(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type == AppConstants::userType['user']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('user_id');
            
            $getUserValidation = Validator::make($input, User::$getUserRule);
            if(!$getUserValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            $result = $this->userManager->getUserById($input);
            if($result != null){
                $response->status = true;
                $response->result = $result;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_FOUND;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getUsersList(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type == AppConstants::userType['user']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('start', 'size', 'user_type');

            if(empty($input['start'])){
                $input['start'] = AppConstants::USER_START_VALUE;
            }
            if(empty($input['size'])){
                $input['size'] = AppConstants::USER_SIZE_VALUE;
            }
            
            $response->status = true;
            $response->result = $this->userManager->getUsersList($input);
            return json_encode($response);

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getLoggedInUser(Request $request)
    {
        $response = new ServiceResponse(); 
        try {
            
            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
            } else {
                $response->status = true;
                $response->result = $user;
            }

            return json_encode($response);

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function searchUser(Request $request)
    {
        $response = new ServiceResponse(); 
        try {
            
            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type != AppConstants::userType['admin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('first_name', 'last_name', 'email', 'contact_number', 'pan_card', 'start', 'size');
            
            if(empty($input['start'])){
                $input['start'] = AppConstants::USER_SEARCH_START_VALUE;
            }
            if(empty($input['size'])){
                $input['size'] = AppConstants::USER_SEARCH_SIZE_VALUE;
            }
            
            $response->status = true;
            $response->result = $this->userManager->searchUser($input);

            return json_encode($response);

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function password()
    {
        return view('user.changePassword');
    }
    
}
