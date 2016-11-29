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

    public function editUser($input)
    {
        try {

            $userId = $input['user_id'];

            $user = User::find($userId);
            
            if($user == null){
                return false;
            } else {
                if(!empty($input['first_name'])){
                    $user->first_name = $input['first_name'];
                }
                if(!empty($input['last_name'])){
                    $user->last_name = $input['last_name'];
                }
                if(!empty($input['date_of_birth'])){
                    $user->date_of_birth = $input['date_of_birth'];
                }
                if(!empty($input['gender'])){
                    $user->gender = $input['gender'];
                }
                if(!empty($input['contact_number'])){
                    $user->contact_number = $input['contact_number'];
                }
                if(!empty($input['profile_pic'])){
                    if(!empty($user->profile_pic)){
                        $this->deleteFile($user->profile_pic);
                    }
                    $user->profile_pic = $this->uploadFile($input['profile_pic']);
                }
                if(!empty($input['pan_card'])){
                    $user->pan_card = $input['pan_card'];
                }
                if(!empty($input['introducer_name'])){
                    $user->introducer_name =  $input['introducer_name'];
                }

                $user->save();

                return true;
            }

            
        } catch(Exception $e){
            throw $e;
        }
    }

    public function editAddress($input)
    {
        try{

            $addressId = $input['address_id'];

            $address = Address::find($addressId);
            if($address == null){
                return false;
            } else{
                if(!empty($input['address_line_1'])){
                    $address->address_line_1 = $input['address_line_1']; 
                }
                if(!empty($input['address_line_2'])){
                    $address->address_line_2 = $input['address_line_2']; 
                }
                if(!empty($input['city'])){
                    $address->city = $input['city'];
                }
                if(!empty($input['state'])){
                    $address->state = $input['state'];
                }
                if(!empty($input['country'])){
                    $address->country = $input['country'];
                }
                if(!empty($input['pin_code'])){
                    $address->pin_code = $input['pin_code'];
                }

                $address->save();
                return true;
            }


        } catch(Exception $e){
            throw $e;
        }
    }

    public function deleteUser($input)
    {
        try {

            $userId = $input['user_id'];

            $user = User::find($userId);

            if($user == null){
                return false;
            } else {
                if($user->address != null){
                    $addressId = $user->address->id;
                    $address = Address::find($addressId);
                    $address->delete();
                }
                $user->delete();
                return true;
            }
            
        } catch(Exception $e){
            throw $e;
        }
    }

}