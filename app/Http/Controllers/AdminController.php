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
use App\Vendor;
use App\User;
use App\Address;

class AdminController extends Controller
{
    function __construct(){
        $this->sessionManager = new SessionManager();
        $this->adminManager = new AdminManager();
    }

    public function createVendor(Request $request)
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
            
            $createVendorValidation = Validator::make($input, Vendor::$createVendorRule);
            if(!$createVendorValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->createVendor($input)){
                $response->status = true;
                $response->result = SuccessConstants::VENDOR_CREATED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::VENDOR_CREATION_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function editVendor(Request $request)
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

            $input = $request->only('vendor_id', 'type', 'name');
            
            $editVendorValidation = Validator::make($input, Vendor::$editVendorRule);
            if(!$editVendorValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->editVendor($input)){
                $response->status = true;
                $response->result = SuccessConstants::VENDOR_EDIT_SUCCESS;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::VENDOR_EDIT_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function deleteVendor(Request $request)
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

            $input = $request->only('vendor_id');
            
            $deleteVendorValidation = Validator::make($input, Vendor::$deleteVendorRule);
            if(!$deleteVendorValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->deleteVendor($input)){
                $response->status = true;
                $response->result = SuccessConstants::VENDOR_DELETE_SUCCESS;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::VENDOR_DELETE_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getVendorById(Request $request)
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

            $input = $request->only('vendor_id');
            
            $getVendorValidation = Validator::make($input, Vendor::$getVendorRule);
            if(!$getVendorValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            $result = $this->adminManager->getVendorById($input);
            if($result != null){
                $response->status = true;
                $response->result = $result;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::VENDOR_NOT_FOUND;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function getVendorsList(Request $request)
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
                $input['start'] = AppConstants::VENDOR_START_VALUE;
            }
            if(empty($input['size'])){
                $input['size'] = AppConstants::VENDOR_SIZE_VALUE;
            }
            
            $response->status = true;
            $response->result = $this->adminManager->getVendorsList($input);
            return json_encode($response);

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function createUser(Request $request)
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

            $input = $request->only('first_name', 'last_name', 'email', 'date_of_birth', 'gender', 'contact_number', 'profile_pic', 'pan_card', 'introducer_name', 'address_line_1', 'address_line_2', 'city', 'state', 'country', 'pin_code');
            
            $createUserValidation = Validator::make($input, User::$createUserRule);
            if(!$createUserValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->createUser($input)){
                $response->status = true;
                $response->result = SuccessConstants::USER_CREATED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::USER_CREATION_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e) {
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function editUser(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type == AppConstants::userType['superAdmin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('user_id', 'first_name', 'last_name', 'date_of_birth', 'gender', 'contact_number', 'profile_pic', 'pan_card', 'introducer_name');
            
            $editUserValidation = Validator::make($input, User::$editUserRule);
            if(!$editUserValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->editUser($input)){
                $response->status = true;
                $response->result = SuccessConstants::USER_EDITED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::USER_EDIT_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e) {
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function editAddress(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type == AppConstants::userType['superAdmin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('address_id', 'address_line_1', 'address_line_2', 'city', 'state', 'country', 'pin_code');
            
            $editAddressValidation = Validator::make($input, Address::$editAddressRule);
            if(!$editAddressValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->editAddress($input)){
                $response->status = true;
                $response->result = SuccessConstants::USER_ADDRESS_EDITED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::USER_ADDRESS_EDIT_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function deleteUser(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $user = $this->sessionManager->getLoggedInUser();
            if($user == null){
                $response->status = false;
                $response->result = ErrorConstants::USER_NOT_LOGGED_IN;
                return json_encode($response);
            }
            if($user->user_type == AppConstants::userType['superAdmin']){
                $response->status = false;
                $response->result = ErrorConstants::NO_PRIVILEGE;
                return json_encode($response);
            }

            $input = $request->only('user_id', 'address_id');
            
            $deleteUserValidation = Validator::make($input, User::$deleteUserRule);
            if(!$deleteUserValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->adminManager->deleteUser($input)){
                $response->status = true;
                $response->result = SuccessConstants::USER_DELETED_SUCCESS;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::USER_DELETE_FAILED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }
}
