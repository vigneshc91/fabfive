<?php

namespace App\Manager;

use Storage;

use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\Vendor;
use App\User;
use App\Address;

class AdminManager {
    
    public function createVendor($input)
    {
        try {
         
            $type = $input['type'];
            $name = $input['name'];

            Vendor::create([
                'type' => $type,
                'name' => $name
            ]);

            return true;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function editVendor($input)
    {
        try {

            $vendorId = $input['vendor_id'];

            $vendor = Vendor::find($vendorId);
            if($vendor == null){
                return false;
            } else {
                if(isset($input['type']) && strlen($input['type']) > 0){
                    $vendor->type = $input['type'];
                }

                if(isset($input['name']) && strlen($input['name']) > 0){
                    $vendor->name = $input['name'];
                }

                $vendor->save();
                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function deleteVendor($input)
    {
        try {

            $vendorId = $input['vendor_id'];

            $vendor = Vendor::find($vendorId);

            if($vendor == null){
                return false;
            } else {
                $vendor->delete();
                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function getVendorById($input)
    {
        try {

            $vendorId = $input['vendor_id'];

            $vendor = Vendor::find($vendorId);

            return $vendor;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function getVendorsList($input)
    {
        try {

            $start = $input['start'];
            $size = $input['size'];

            if(!empty($input['type'])){
                $type = $input['type'];
                $result = Vendor::where('type', $type)->skip($start)->take($size)->get();
            } else {
                $result = Vendor::skip($start)->take($size)->get();
            }

            return $result;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function createUser($input)
    {
        try {

            $firstName = $input['first_name'];
            $lastName = $input['last_name'];
            $email = $input['email'];
            $dob = $input['date_of_birth'];
            $gender = $input['gender'];
            $phone = $input['contact_number'];
            $profilePicture = null;
            if(!empty($input['profile_pic'])){
                $profilePicture = $this->uploadFile($input['profile_pic']);
            }
            $pan = $input['pan_card'];
            $introducer = null;
            if(!empty($input['introducer_name'])){
                $introducer = $input['introducer_name'];
            }
            $addres1 = $input['address_line_1'];
            $addres2 = null;
            if(!empty($input['address_line_2'])){
                $addres2 = $input['address_line_2']; 
            }
            $city = $input['city'];
            $state = $input['state'];
            $country = $input['country'];
            $pinCode = null;
            if(!empty($input['pin_code'])){
                $pinCode = $input['pin_code'];
            }

            $isUserExist = User::where('email', $email)->count();
            if($isUserExist == 0){
                $user = User::create([
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'date_of_birth' => $dob,
                    'gender' => $gender,
                    'contact_number' => $phone,
                    'profile_pic' => $profilePicture,
                    'user_type' => AppConstants::userType['user'],
                    'status' => AppConstants::userStatus['pending'],
                    'pan_card' => $pan,
                    'introducer_name' => $introducer
                ]);

                $address = Address::create([
                    'user_id' => $user->id,
                    'address_line_1' => $addres1,
                    'address_line_2' => $addres2,
                    'city' => $city,
                    'state' => $state,
                    'country' => $country,
                    'pin_code' => $pinCode
                ]);

                return true;
            } else {
                return false;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function uploadFile($file){
        try {
            $fileName = uniqid() . "." . $file->getClientOriginalExtension();
            $upload = Storage::put($fileName, file_get_contents($file));
            if($upload){
                return $fileName;
            }

            return false;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function deleteFile($file){
        try{

            Storage::delete($file);

        } catch(Exception $e){
            throw $e;
        }
    }

}