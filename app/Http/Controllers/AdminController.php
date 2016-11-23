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
use App\Manager\AdminManager;
use App\Company;

class AdminController extends Controller
{
    function __construct(){
        $this->sessionManager = new SessionManager();
        $this->adminManager = new AdminManager();
    }

    public function createCompany(Request $request)
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

            $input = $request->only('type', 'name');
            
            $createCompanyValidation = Validator::make($input, Company::$createCompanyRule);
            if(!$createCompanyValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->createCompany($input)){
                $response->status = true;
                $response->result = SuccessConstants::COMPANY_CREATED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::COMPANY_CREATION_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function editCompany(Request $request)
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

            $input = $request->only('company_id', 'type', 'name');
            
            $editCompanyValidation = Validator::make($input, Company::$editCompanyRule);
            if(!$editCompanyValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->editCompany($input)){
                $response->status = true;
                $response->result = SuccessConstants::COMPANY_EDIT_SUCCESS;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::COMPANY_EDIT_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function deleteCompany(Request $request)
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

            $input = $request->only('company_id');
            
            $deleteCompanyValidation = Validator::make($input, Company::$deleteCompanyRule);
            if(!$deleteCompanyValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->deleteCompany($input)){
                $response->status = true;
                $response->result = SuccessConstants::COMPANY_DELETE_SUCCESS;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::COMPANY_DELETE_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getCompanyById(Request $request)
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

            $input = $request->only('company_id');
            
            $getCompanyValidation = Validator::make($input, Company::$getCompanyRule);
            if(!$getCompanyValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            $result = $this->adminManager->getCompanyById($input);
            if($result != null){
                $response->status = true;
                $response->result = $result;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::COMPANY_NOT_FOUND;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getCompanyList(Request $request)
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

            $input = $request->only('start', 'size', 'type');

            if(empty($input['start'])){
                $input['start'] = AppConstants::COMPANY_START_VALUE;
            }
            if(empty($input['size'])){
                $input['size'] = AppConstants::COMPANY_SIZE_VALUE;
            }
            
            $response->status = true;
            $response->result = $this->adminManager->getCompanyList($input);
            return json_encode($response);

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }
}
